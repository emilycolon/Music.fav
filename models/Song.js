module.exports = (sequelize, DataTypes) => {
  return sequelize.define('song', {
    artistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    albumName: DataTypes.STRING
  });
};
