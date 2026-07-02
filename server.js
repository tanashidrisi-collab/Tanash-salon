const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows your server to accept JSON data from the frontend

// Test Route
app.get('/', (req, res) => {
    res.send('Salon Booking API is running perfectly!');
});

// CRUCIAL FOR RENDER: Use process.env.PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
