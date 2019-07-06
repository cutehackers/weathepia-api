'use strict';

const Hapi = require('@hapi/hapi');
const Package = require('../../../package');
const { port, serverUrl } = require('../../../config');

console.log(`start server with url ${serverUrl}`);

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: port || 3000,
    routes: {
      cors: {
        origin: ['*'],
    }
    }
  });

  // Register vendors plugins
  await server.register([
    require("blipp"),
    require("@hapi/inert"),
    require("@hapi/vision"),
    {
      plugin: require("hapi-cors"),
      options: {
        origins: [serverUrl]
      }
    },
    {
      plugin: require("hapi-swagger"),
      options: {
        info: {
          title: "Weathepia API documentation",
          version: Package.version
        }
      }
    },
    {
      plugin: require("@hapi/good"),
      options: {
        ops: {
          interval: 1000 * 60
        },
        reporters: {
          myConsoleReporter: [
            {
              module: "@hapi/good-squeeze",
              name: "Squeeze",
              args: [{ ops: "*", log: "*", error: "*", response: "*" }]
            },
            {
              module: "@hapi/good-console"
            },
            "stdout"
          ]
        }
      }
    },
  ]);

  // Register custom plugins
  await server.register([
    require('./oauth'),
    require('./hello'),
    require('./private'),
    require('./users'),
    require('./weather/channels'),
  ]);

  return server;
};

module.exports = createServer;