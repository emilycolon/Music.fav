const Sequelize = require('sequelize');

const sequelize = new Sequelize('music', 'inclassuser', 'Hartford1810', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

const Artist = sequelize.import('../models/Artist');
const Song = sequelize.import('../models/Song');

Song.Artist = Song.belongsTo(Artist);
Artist.Songs = Artist.hasMany(Song);

sequelize.authenticate().then(() => {
  console.log('Connected');
});

module.exports = {
  Sequelize,
  sequelize,
  models: {
    Artist,
    Song
  }
};
