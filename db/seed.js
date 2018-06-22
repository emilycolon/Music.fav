const connection = require('./connection');
const { Artist, Song } = connection.models;

const artistSeeds = require('./seed_data/artists.json');
const songSeeds = require('./seed_data/songs.json');

Artist.destroy({ where: {} }).then(() => {
  return Artist.bulkCreate(artistSeeds).then(() => {
    return Song.destroy({ where: {} })
      .then(() => {
        return Song.bulkCreate(songSeeds);
      })
      .then(() => {
        process.exit();
      });
  });
});
