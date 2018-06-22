module.exports = (sequelize, DataTypes) => {
  return sequelize.define('artist', {
    songId: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    name: DataTypes.STRING
  });
};
