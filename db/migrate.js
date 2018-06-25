const connection = require('./connection');

connection.sequelize
  .sync({ force: true })
  .then(
    (module.exports = {
      function(queryInterface, Sequelize) {
        queryInterface.createTable('Songs', {
          artistId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
              model: 'Artists',
              key: 'id',
              as: 'artistId'
            }
          }
        });
      }
    })
  )
  .then(() => {
    process.exit();
  });
