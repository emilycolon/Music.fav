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

  return Artist;
};
