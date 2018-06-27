module.exports = (sequelize, DataTypes) => {
  return sequelize.define('artist', {
    name: DataTypes.STRING
  });

  Artist.associate = models => {
    Artist.hasMany(models.Song, {
      foreignKey: 'artistId',
      as: 'songs'
    });
  };
  Artist.associate = models => {
    Artist.hasMany(models.Album, {
      foreignKey: 'artistId',
      as: 'albums'
    });
  };

  return Artist;
};
