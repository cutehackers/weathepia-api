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
    this.model = this.db.model("WeatherChannels");
  }

  async create(weatherChannelEntity) {
    const { uid, city } = weatherChannelEntity;

    const seqWeatherChannel = await this.model.create({ uid, city });
    await seqWeatherChannel.save();

    return new WeatherChannel(
      seqWeatherChannel.id,
      seqWeatherChannel.uid,
      seqWeatherChannel.city
    );
  }

  async getAll() {
    const seqWeatherChannels = await this.model.findAll();
    return seqWeatherChannels.map(weatherChannel => {
      return new WeatherChannel(
        weatherChannel.id,
        weatherChannel.uid,
        weatherChannel.city
      );
    });
  }

  async getAllByUserId(uid) {
    const seqWeatherChannels = await this.model.findAll({
      where: {
        uid: uid
      }
    });
    return seqWeatherChannels.map(weatherChannel => {
      return new WeatherChannel(
        weatherChannel.id,
        weatherChannel.uid,
        weatherChannel.city
      );
    });
  }

  async destroy(id) {
    const seqChannel = await this.model.findByPk(id);
    if (seqChannel) {
      return seqChannel.destroy();
    }
    return false;
  }
};
