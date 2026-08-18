const { app } = require('@azure/functions');
const fetch = require('node-fetch');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`;

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

app.http('topTracks', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'top-tracks',
    handler: async (request, context) => {
        try {
            const { access_token } = await getAccessToken();
        
            const response = await fetch(TOP_TRACKS_ENDPOINT, {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            });
        
            if (!response.ok) {
              const errorData = await response.json().catch(() => ({}));
              return {
                  status: response.status,
                  jsonBody: { error: errorData.error?.message || `Spotify API error: ${response.statusText}` }
              };
            }
        
            const { items } = await response.json();
        
            const tracks = items.map((track) => ({
              artist: track.artists.map((_artist) => _artist.name).join(', '),
              songUrl: track.external_urls.spotify,
              title: track.name,
              albumImageUrl: track.album.images[0].url,
            }));
        
            return {
                status: 200,
                jsonBody: tracks
            };
          } catch (error) {
            return {
                status: 500,
                jsonBody: { error: error.message || 'Error fetching top tracks' }
            };
          }
    }
});
