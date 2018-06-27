module.exports = (sequelize, DataTypes) => {
    return sequelize.define('album', {
      albumTitle: DataTypes.STRING
    });
    Album.associate = models => {
      Album.belongsTo(models.Artist, {
        foreignKey: 'artistId',
        onDelete: 'CASCADE'
      });
    };
    Album.associate = models => {
        Album.hasMany(models.Song, {
          foreignKey: 'albumId',
          as: 'songs'
        });
      };
    
      return Album;
    };