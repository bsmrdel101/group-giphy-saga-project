const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${req.query}`, (req, res) => {
    res.send('search complete');
});

module.exports = router;
