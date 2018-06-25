const express = require('express');
const router = express.Router();
const { Artist, Song } = require('../db/connection').models;

// const queryArtist = { include: [{ model: Artist }] };
// const querySong = { include: [{ model: Song }] };

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
  Artist.findAll().then(artists => res.render('song/new', { artists }));
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
  Song.findAll().then(songs => {
    Artist.findAll().then(artists => {
      res.render('song/show', { songs, artists });
    });
  });
});

// post new artist
router.post('/artist', (req, res) => {
  Artist.create(req.body).then(artists => {
    res.redirect('/artist');
  });
});

// post new song
router.post('/song', (req, res) => {
  console.log(req.body)
  Song.create({
    title: req.body.title,
    albumTitle: req.body.albumTitle,
    artistId: req.body.artistId
  }).then(songs => {
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

// delete song
router.delete('/song/:id', (req, res) => {
  Song.findById(req.params.id).then(song => {
    song.destroy().then(() => {
      res.redirect('/song');
    });
  });
});

module.exports = router;
