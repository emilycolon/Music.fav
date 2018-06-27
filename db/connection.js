const Sequelize = require('sequelize');

const sequelize = new Sequelize('music', 'inclassuser', 'Hartford1810', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

const Artist = sequelize.import('../models/Artist');
const Album = sequelize.import('../models/Album');
const Song = sequelize.import('../models/Song');

Artist.hasMany(Album);
Artist.hasMany(Song);
Album.hasMany(Song);
Album.belongsTo(Artist);
Song.belongsTo(Artist);
Song.belongsTo(Album);

sequelize.authenticate().then(() => {
  console.log('Connected');
});

module.exports = {
  Sequelize,
  sequelize,
  models: {
    Artist,
    Album,
    Song
  }
};
