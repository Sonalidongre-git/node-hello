const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log client IP
app.use((req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Request Method: ${req.method}, URL: ${req.url}, Client IP: ${clientIp}`);
    next();
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
