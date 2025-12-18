const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for contact form (placeholder)
app.use(express.json());
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
});

//404 handler
app.use('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Healthcare AI Promotion Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});