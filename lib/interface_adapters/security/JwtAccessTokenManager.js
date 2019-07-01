'use strict';

const jwt = require('jsonwebtoken');

const AccessTokenManager = require('../../application_business_rules/security/AccessTokenManager');


const JWT_SECRET_KEY = 'jh2@mobile.com';

module.exports = class extends AccessTokenManager {

  generate(payload) {
    return jwt.sign(payload, JWT_SECRET_KEY);
  }

  decode(accessToken) {
    return jwt.verify(accessToken, JWT_SECRET_KEY);
  }

};