const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// In-memory cache (persists across warm invocations on the same Vercel instance)
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let cachedData = null;
let cacheTimestamp = 0;
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

export default async function handler(req, res) {
  try {
    // Return cached data if it's still fresh
    const now = Date.now();
    if (cachedData && (now - cacheTimestamp) < CACHE_TTL_MS) {
      return res.status(200).json(cachedData);
    }

    const { access_token } = await getAccessToken();

    const response = await fetchWithRetry(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({ 
        error: errorData.error?.message || `Spotify API error: ${response.statusText}` 
      });
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return res.status(200).json([]);
    }

    const tracks = data.items.map((item) => ({
      id: item.id,
      title: item.name,
      artist: item.artists.map((artist) => artist.name).join(', '),
      albumImageUrl: item.album?.images[0]?.url || '',
      songUrl: item.external_urls?.spotify || 'https://open.spotify.com',
    }));

    // Store in cache
    cachedData = tracks;
    cacheTimestamp = now;

    return res.status(200).json(tracks);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Error fetching top tracks' });
  }
}
