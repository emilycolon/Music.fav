const express = require('express');
const router = express.Router();
const { Artist, Album, Song } = require('../db/connection').models;

// new album
router.get('/album/new', (req, res) => {
  Artist.findAll().then(artists => {
    res.render('album/new', { artists });
  });
});

// post new album
router.post('/album/new', (req, res) => {
  Album.create(req.body).then(albums => {
    res.redirect('/artist');
  });
});

module.exports = router;
