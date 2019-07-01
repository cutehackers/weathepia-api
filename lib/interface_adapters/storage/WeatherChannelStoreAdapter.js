'use strict';

/**
 * Sequelize
 * http://docs.sequelizejs.com/manual/getting-started.html
 */

const sequelize = require('../../frameworks_drivers/database/sequelize');
const WeatherChannel = require('../../enterprise_business_rules/entities/WeatherChannel');

module.exports = class {

    constructor() {
        this.db = sequelize;
        this.model = this.db.model('WeatherChannels');
    }

    async save(weatherChannelEntity) {
        const { name, address } = weatherChannelEntity;

        const seqWeatherChannel = await this.model.create({ name, address });
        await seqWeatherChannel.save();

        return new WeatherChannel(seqWeatherChannel.id, seqWeatherChannel.name, seqWeatherChannel.address);
    }

    async getAll() {
        const seqWeatherChannels = await this.model.findAll();
        return seqWeatherChannels.map((weatherChannel) => {
            return new WeatherChannel(weatherChannel.id, weatherChannel.name, weatherChannel.address);
        });
    }
};
