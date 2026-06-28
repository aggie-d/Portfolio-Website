const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Implements exponential backoff and respects the Retry-After header for 429 rate limits
const fetchWithRetry = async (url, options, maxRetries = 2) => {
  let delay = 1000;
  for (let i = 0; i <= maxRetries; i++) {
    const response = await fetch(url, options);
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      delay *= 2;
      continue;
    }
    if (response.status >= 500 && i < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
      continue;
    }
    return response;
  }
};

const getAccessToken = async () => {
  const response = await fetchWithRetry(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error_description || 'Failed to fetch access token');
  }

  return response.json();
};

const getRecentlyPlayed = async (access_token) => {
  const response = await fetchWithRetry(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) return { isPlaying: false };

  const data = await response.json();
  if (!data.items || data.items.length === 0) return { isPlaying: false };

  const song = data.items[0].track;

  return {
    albumImageUrl: song.album.images[0].url,
    artist: song.artists.map((_artist) => _artist.name).join(', '),
    isPlaying: false,
    songUrl: song.external_urls.spotify,
    title: song.name,
  };
};

export default async function handler(req, res) {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetchWithRetry(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204) {
      const recentlyPlayed = await getRecentlyPlayed(access_token);
      return res.status(200).json(recentlyPlayed);
    }

    if (!response.ok) {
      // Read returned error message per OpenAPI schema and pass to the client
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({ 
        error: errorData.error?.message || `Spotify API error: ${response.statusText}` 
      });
    }

    const song = await response.json();
    if (song.item === null) {
      const recentlyPlayed = await getRecentlyPlayed(access_token);
      return res.status(200).json(recentlyPlayed);
    }

    return res.status(200).json({
      albumImageUrl: song.item.album.images[0].url,
      artist: song.item.artists.map((_artist) => _artist.name).join(', '),
      isPlaying: song.is_playing,
      songUrl: song.item.external_urls.spotify,
      title: song.item.name,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Error fetching currently playing song' });
  }
}