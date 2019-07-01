'use strict';

const WeatherChannel = require('../../enterprise_business_rules/entities/WeatherChannel');

/**
 * USECASE GetAllWeatherChannels
 * retrieve list of weather channel entities from table WeatherChannels
 */
module.exports = ({ weatherChannelRepository }) => {
    return weatherChannelRepository.getAll();
};
