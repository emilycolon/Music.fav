const express = require('express');
const router = express.Router();
const Artist = require('../db/connection').models.Artist;
const Song = require('../db/connection').models.Song;

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

// see all favorited songs
router.get('/song', (req, res) => {
  Song.findAll().then(songs => res.render('song/show', { songs }));
});

// see a specific artist
router.get('/artist/:id', (req, res) => {
  Artist.findById(req.params.id).then(artist => res.render('artist/id'));
});

// see a specific song
router.get('/song/:id', (req, res) => {
  Artist.findById(req.params.id).then(artist => res.render('song/id'));
});

module.exports = router;



testdb=# SELECT EMP_ID, NAME, DEPT FROM COMPANY INNER JOIN DEPARTMENT
        ON COMPANY.ID = DEPARTMENT.EMP_ID;