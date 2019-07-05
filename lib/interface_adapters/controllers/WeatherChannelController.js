'use strict';

const Boom = require('@hapi/boom');
const WeatherChannelRepository = require('../../application_business_rules/repositories/WeatherChannelRepository');
const WeatherChannelStoreAdapter = require('../storage/WeatherChannelStoreAdapter');
const WeatherChannelSerializer = require('../serializers/WeatherChannelSerializer');
const CreateWeatherChannel = require('../../application_business_rules/use_cases/CreateWeatherChannel');
const GetAllWeatherChannels = require('../../application_business_rules/use_cases/GetAllWeatherChannels');

const weatherChannelRepository = new WeatherChannelRepository(new WeatherChannelStoreAdapter());

module.exports = {

    async createWeatherChannel(request) {

        // input
        const { name, address } = request.payload;

        // usecase
        const channel = await CreateWeatherChannel(name, address, { weatherChannelRepository });

        // output
        const serializer = new WeatherChannelSerializer();
        return serializer.serialize(channel);
    },

    async getAllWeatherChannels(request) {
        // usecase
        const channels = await GetAllWeatherChannels({ weatherChannelRepository });

        // output
        const serializer = new WeatherChannelSerializer();
        return channels.map(serializer.serialize);
    }
};
