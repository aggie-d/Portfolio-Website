# Developer Portfolio Website

This is a developer portfolio project containing a React frontend built with Vite and GSAP, and an Azure Functions API backend.

## Project Structure

- `/portfolio` - The main React frontend application.
- `/portfolio/api` - The backend API powered by Azure Functions.
- `spotifyaccess.js` - Script for authenticating with Spotify.

## Getting Started

### Prerequisites
- Node.js (v22+)
- Azure Functions Core Tools (for running the backend locally)

### Running the Frontend
1. Navigate to the `portfolio` directory:
   ```bash
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Running the Backend (Azure Functions)
1. Navigate to the `portfolio/api` directory:
   ```bash
   cd portfolio/api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Azure Functions local environment:
   ```bash
   npm start
   ```

### Docker Deployment
The project includes a multi-stage Dockerfile in the `portfolio` directory that builds the frontend and serves it using Nginx for production deployment (e.g. AWS).
To build and run locally with Docker:
```bash
cd portfolio
docker build -t portfolio-website .
docker run -p 8080:80 portfolio-website
```