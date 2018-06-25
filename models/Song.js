module.exports = (sequelize, DataTypes) => {
  return sequelize.define('song', {
    title: DataTypes.STRING,
    albumTitle: DataTypes.STRING
  });
  Song.associate = models => {
    Song.belongsTo(models.Artist, {
      foreignKey: 'artistId',
      onDelete: 'CASCADE'
    });
  };

  return Song;
};
