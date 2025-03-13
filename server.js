const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/terms-and-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});