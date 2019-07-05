'use strict';

const AuthorizationController = require('../../../interface_adapters/controllers/AuthorizationController');

module.exports = {
  name: 'oauth',
  version: '1.0.0',
  register: (server) => {

    server.auth.scheme('oauth', require('./scheme'));

    server.auth.strategy('oauth-jwt', 'oauth');

    server.route({
      method: 'POST',
      path: '/oauth/token',
      handler: AuthorizationController.getAccessToken,
      options: {
        description: 'Return a access token when the given user has valid credential',
        tags: ['api'],
      },
    });
  }
};
