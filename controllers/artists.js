const express = require('express');
const router = express.Router();
const { Artist, Song } = require('../db/connection').models;
const querySong = { include: [{ model: Song }] };

// see all favorited artists
router.get('/artist', (req, res) => {
  Artist.findAll().then(artists => res.render('artist/show', { artists }));
});

// new artist
router.get('/artist/new', (req, res) => {
  res.render('artist/new');
});

// edit artist
router.get('/artist/edit/:id', (req, res) => {
  Artist.findById(req.params.id).then(artist => {
    res.render('artist/edit', { artist });
  });
});

// post new artist
router.post('/artist', (req, res) => {
  Artist.create(req.body).then(artists => {
    res.redirect('/artist');
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

// delete artist
router.delete('/artist/:id', (req, res) => {
  Artist.findById(req.params.id).then(artist => {
    Song.findAll().then(song => {
      Song.destroy({
        where: {
          artistId: req.params.id
        }
      }).then(artist => {
        Artist.destroy({
          where: {
            id: req.params.id
          }
        }).then(() => {
          res.redirect('/artist');
        });
      });
    });
  });
});

module.exports = router;
