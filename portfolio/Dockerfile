# Use an official Node.js LTS (v22) as a parent image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5173 (default for Vite)
EXPOSE 5173

# Start the Vite server, exposing it to the network so we can access it outside the container
CMD ["npm", "run", "dev", "--", "--host"]