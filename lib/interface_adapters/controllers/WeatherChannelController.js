'use strict';

const Boom = require('@hapi/boom');
const WeatherChannelRepository = require('../../application_business_rules/repositories/WeatherChannelRepository');
const WeatherChannelStoreAdapter = require('../storage/WeatherChannelStoreAdapter');
const WeatherChannelSerializer = require('../serializers/WeatherChannelSerializer');
const CreateWeatherChannel = require('../../application_business_rules/use_cases/CreateWeatherChannel');
const GetAllWeatherChannels = require('../../application_business_rules/use_cases/GetAllWeatherChannels');
const GetAllWeatherChannelsByUserId = require('../../application_business_rules/use_cases/GetAllWeatherChannelsByUserId');
const DeleteWeatherChannel = require('../../application_business_rules/use_cases/DeleteWeatherChannel');

const weatherChannelRepository = new WeatherChannelRepository(new WeatherChannelStoreAdapter());

module.exports = {
  async createWeatherChannel(request) {
    // input
    const { uid, city } = request.payload;

    // usecase
    const channel = await CreateWeatherChannel(uid, city, {
      weatherChannelRepository
    });

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
  },

  async getAllWeatherChannelsByUserId(request) {
    // input
    const uid = request.params.uid;

    // usecase
    const channels = await GetAllWeatherChannelsByUserId(uid, {
      weatherChannelRepository
    });

    // output
    const serializer = new WeatherChannelSerializer();
    return channels.map(serializer.serialize);
  },

  async deleteWeatherChannel(request, h) {
    // input
    const id = request.params.id;

    // usecase
    const result = await DeleteWeatherChannel(id, { weatherChannelRepository });
    if (!result) {
      return Boom.unauthorized("Invlaid weather channel information");
    }

    // output
    return h.response().code(204);
  }
};
