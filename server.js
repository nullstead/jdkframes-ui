const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Set up the proxy for API requests
app.use('/api', createProxyMiddleware({
  target: 'http://backend-api.jdkframes.local:3000',
  changeOrigin: true
}));

// For any other requests, serve index.html (if you're using client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});