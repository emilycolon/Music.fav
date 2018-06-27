const connection = require('./connection');
const { Artist, Album, Song } = connection.models;

const artistSeeds = require('./seed_data/artist.json');
const albumSeeds = require('./seed_data/album.json');
const songSeeds = require('./seed_data/song.json');

Artist.destroy({ where: {} }).then(() => {
  return Artist.bulkCreate(artistSeeds).then(() => {
    return Album.destroy({ where: {} }).then(() => {
      return Album.bulkCreate(albumSeeds).then(() => {
        return Song.destroy({ where: {} })
          .then(() => {
            return Song.bulkCreate(songSeeds);
          })
          .then(() => {
            process.exit();
          });
      });
    });
  });
});
