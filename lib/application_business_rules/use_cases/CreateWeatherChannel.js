'use strict';

const WeatherChannel = require('../../enterprise_business_rules/entities/WeatherChannel');

/**
 * USECASE CreateWeatherChannel
 * create an entity in table WeatherChannels
 */
module.exports = (uid, city, { weatherChannelRepository }) => {
    const weatherChannel = new WeatherChannel(null, uid, city);
    return weatherChannelRepository.create(weatherChannel);
};
