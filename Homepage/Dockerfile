# Use node image as base
FROM node:20.11.0

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite project
RUN npm run build

# Expose port (adjust if needed)
EXPOSE 3000

# Command to run the Vite app
CMD ["npm", "start"]
