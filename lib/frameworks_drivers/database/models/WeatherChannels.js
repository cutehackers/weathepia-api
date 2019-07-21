module.exports = (sequelize, DataTypes) => {

    const WeatherChannels = sequelize.define('WeatherChannels', {
        // attributes
        uid: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // options
    });

    return WeatherChannels;
};
