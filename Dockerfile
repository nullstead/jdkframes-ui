FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all your static files
COPY . .

# Expose port 80
EXPOSE 80

# Start the server
CMD ["node", "server.js"]