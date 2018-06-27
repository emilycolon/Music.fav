module.exports = (sequelize, DataTypes) => {
  return sequelize.define('song', {
    title: DataTypes.STRING
  });
  Song.associate = models => {
    Song.belongsTo(models.Artist, {
      foreignKey: 'artistId',
      onDelete: 'CASCADE'
    });
  };
  Song.associate = models => {
    Song.belongsTo(models.Album, {
      foreignKey: 'albumId',
      onDelete: 'CASCADE'
    });
  };

  return Song;
};
