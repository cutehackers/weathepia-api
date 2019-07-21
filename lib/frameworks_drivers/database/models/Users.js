const WeatherChannels = require('./WeatherChannels');

module.exports = (sequelize, DataTypes) => {

  const Users = sequelize.define('Users', {

    // attributes
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    /**
     * 0: normal
     * 1: admin
     */
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // options
    indexes: [
      {
          unique: true,
          fields: ['email']
      }
    ]
  });

  Users.associate = function(models) {
    Users.hasMany(models.WeatherChannels, {as: 'UserWeatherChannel'})
  }

  return Users;
};
