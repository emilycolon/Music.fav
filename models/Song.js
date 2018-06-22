module.exports = (sequelize, DataTypes) => {
  return sequelize.define('song', {
    artistId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    albumTitle: DataTypes.STRING
  });
};
