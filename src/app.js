const path = require('path');
const os = require('os');
const express = require('express');

const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime()
  });
});

// App information endpoint
app.get('/api/info', (req, res) => {
  res.json({
    version: process.env.APP_VERSION || '1.0.0',
    hostname: os.hostname()
  });
});

module.exports = app;
