'use strict';

/**
 * host/weather/channels/{:id} save, get, update, delete
 */

const WeatherChannelController = require('../../../interface_adapters/controllers/WeatherChannelController');

module.exports = {
    name: 'weather-channels',
    version: '1.0.0',
    register: async (server) => {
        server.route([
          {
            method: "POST",
            path: "/weather/channels",
            handler: WeatherChannelController.createWeatherChannel,
            options: {
              description: "Create a weather channel for a user",
              tags: ["api"]
            }
          },
          {
            method: "GET",
            path: "/weather/channels",
            handler: WeatherChannelController.getAllWeatherChannels,
            options: {
              description: "Get list of weather channels",
              tags: ["api"]
            }
          },
          {
            method: "GET",
            path: "/weather/channels/user/{uid}",
            handler: WeatherChannelController.getAllWeatherChannelsByUserId,
            options: {
              description: "Get list of weather channels by user",
              tags: ["api"]
            }
          },
          {
            method: "DELETE",
            path: "/weather/channels/{id}",
            handler: WeatherChannelController.deleteWeatherChannel,
            options: {
              description: "Delete a weather channel",
              tags: ["api"]
            }
          }
        ]);
    }
};
