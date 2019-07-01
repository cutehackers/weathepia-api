module.exports = (sequelize, DataTypes) => {

    sequelize.define('WeatherChannels',
        {
            // attributes
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            // options
        }
    );
};
