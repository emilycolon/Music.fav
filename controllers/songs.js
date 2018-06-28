const express = require('express');
const router = express.Router();
const { Artist, Album, Song } = require('../db/connection').models;

// new song
router.get('/song/new', (req, res) => {
  Artist.findAll().then(artists => {
    Album.findAll().then(albums => {
      res.render('song/new', { artists, albums });
    });
  });
});

// edit song
router.get('/song/edit/:id', (req, res) => {
  Song.findById(req.params.id).then(song => {
    Artist.findAll().then(artists => {
      Album.findAll().then(albums => {
        res.render('song/edit', { song, artists, albums });
      });
    });
  });
});

// see all favorited songs
router.get('/song', (req, res) => {
  Song.findAll().then(songs => {
    Artist.findAll().then(artists => {
      Album.findAll().then(albums => {
        res.render('song/show', { songs, artists, albums });
      });
    });
  });
});

// post new song
router.post('/song', (req, res) => {
  Song.create(req.body).then(song => {
    res.redirect('/song');
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

// delete song
router.delete('/song/:id', (req, res) => {
  Song.findById(req.params.id).then(song => {
    song.destroy().then(() => {
      res.redirect('/song');
    });
  });
});

module.exports = router;
