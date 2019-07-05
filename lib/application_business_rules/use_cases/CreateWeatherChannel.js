'use strict';

const WeatherChannel = require('../../enterprise_business_rules/entities/WeatherChannel');

/**
 * USECASE CreateWeatherChannel
 * create a entity on table WeatherChannels
 */
module.exports = (name, address, { weatherChannelRepository }) => {
    const weatherChannel = new WeatherChannel(name, address);
    return weatherChannelRepository.create(weatherChannel);
};
