import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables (like SPOTIFY_CLIENT_ID) from .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-server-proxy',
        configureServer(server) {
          server.middlewares.use('/api/now-playing', async (req, res, next) => {
            // Populate process.env for the backend function
            Object.assign(process.env, env);

            // Mock Vercel's res.status() and res.json() helper functions
            res.status = (code) => { res.statusCode = code; return res; };
            res.json = (data) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); };

            try {
              const { default: handler } = await server.ssrLoadModule('/api/now-playing.js');
              await handler(req, res);
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
          });
        }
      }
    ],
  };
})
