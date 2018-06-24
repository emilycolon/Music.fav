const express = require('express');
const router = express.Router();
const Artist = require('../db/connection').models.Artist;
const Song = require('../db/connection').models.Song;
let name = '';

// home page
router.get('/', (req, res) => {
  res.render('index');
});

// see all favorited artists
router.get('/artist', (req, res) => {
  Artist.findAll().then(artists => res.render('artist/show', { artists }));
});

// new artist
router.get('/artist/new', (req, res) => {
  res.render('artist/new');
});

// new song
router.get('/song/new', (req, res) => {
  res.render('song/new');
});

// edit artist
router.get('/artist/edit/:id', (req, res) => {
  Artist.findById(req.params.id).then(artist => {
    res.render('artist/edit', { artist });
  });
});

// edit song
router.get('/song/edit/:id', (req, res) => {
  Song.findById(req.params.id).then(song => {
    res.render('song/edit', { song });
  });
});

// see all favorited songs
router.get('/song', (req, res) => {
  Song.findAll().then(songs => res.render('song/show', { songs }));
});

// post new artist
router.post('/artist', (req, res) => {
  Artist.create(req.body).then(artists => {
    res.redirect('/artist');
  });
});

// post new song
router.post('/song', (req, res) => {
  Song.create(req.body).then(songs => {
    res.redirect('/song');
  });
});

// update artist
router.put('/artist/:id', (req, res) => {
  Artist.findById(req.params.id)
    .then(artist => {
      return artist.updateAttributes(req.body);
    })
    .then(artist => {
      res.redirect('/artist');
    });
});

// update song
router.put('/song/:id', (req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      return song.updateAttributes(req.body);
    })
    .then(song => {
      res.redirect('/song');
    });
});

module.exports = router;

// testdb=# SELECT name FROM songs INNER JOIN artists ON songs.artistId = artists.Id;
