'use strict';

const Boom = require('@hapi/boom');
const UserRepository = require('../../application_business_rules/repositories/UserRepository');
const UserStoreAdapter = require('../storage/UserStoreAdapter');
const AuthorizationSerializer = require('../serializers/AuthorizationSerializer');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const GetAccessToken = require('../../application_business_rules/use_cases/GetAccessToken');
const VerifyAccessToken = require('../../application_business_rules/use_cases/VerifyAccessToken');

module.exports = {

  async getAccessToken(request) {
    console.log(`AuthorizationController.getAccessToken: ${JSON.stringify(request.payload)}`);

    // Input
    const grantType = request.payload['grant_type'];
    const email = request.payload['username'];
    const password = request.payload['password'];

    if (!grantType || grantType !== 'password') {
      return Boom.badRequest('Invalid authentication strategy');
    }

    // Treatment
    const userRepository = new UserRepository(new UserStoreAdapter());
    const accessTokenManager = new JwtAccessTokenManager();

    try {
      const authorization = await GetAccessToken(email, password, { userRepository, accessTokenManager });

      // Output
      const authorizationSerializer = new AuthorizationSerializer();
      console.error(`darby> auth token: ${JSON.stringify(authorizationSerializer.serialize(authorization))}`)

      return authorizationSerializer.serialize(authorization);
    } catch (err) {
      console.error(`AuthorizationController.getAccessToken: ${err}`)
      return Boom.unauthorized('Bad credentials');
    }
  },

  verifyAccessToken(request, h) {

    // Input
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    // Treatment
    const accessTokenManager = new JwtAccessTokenManager();
    try {
      const { uid } = VerifyAccessToken(accessToken, { accessTokenManager });

      // Output
      return h.authenticated({
        credentials: { uid },
        artifacts: { accessToken: accessToken }
      });
    } catch (err) {
      return Boom.unauthorized('Bad credentials');
    }
  },

};