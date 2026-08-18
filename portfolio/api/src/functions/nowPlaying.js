const { app } = require('@azure/functions');
const fetch = require('node-fetch');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
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
  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
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

app.http('nowPlaying', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'now-playing',
    handler: async (request, context) => {
        try {
            const { access_token } = await getAccessToken();
        
            const response = await fetch(NOW_PLAYING_ENDPOINT, {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            });
        
            if (response.status === 204) {
              const recentlyPlayed = await getRecentlyPlayed(access_token);
              return { status: 200, jsonBody: recentlyPlayed };
            }
        
            if (!response.ok) {
              const errorData = await response.json().catch(() => ({}));
              return { 
                  status: response.status, 
                  jsonBody: { error: errorData.error?.message || `Spotify API error: ${response.statusText}` } 
              };
            }
        
            const song = await response.json();
            if (song.item === null) {
              const recentlyPlayed = await getRecentlyPlayed(access_token);
              return { status: 200, jsonBody: recentlyPlayed };
            }
        
            return {
              status: 200,
              jsonBody: {
                albumImageUrl: song.item.album.images[0].url,
                artist: song.item.artists.map((_artist) => _artist.name).join(', '),
                isPlaying: song.is_playing,
                songUrl: song.item.external_urls.spotify,
                title: song.item.name,
              }
            };
          } catch (error) {
            return { 
                status: 500, 
                jsonBody: { error: error.message || 'Error fetching currently playing song' } 
            };
          }
    }
});
