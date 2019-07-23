'use strict';

const _serializeSingleAuthorization = (authorization) => {
  return {
    'id': authorization.id,
    'firstName': authorization.firstName,
    'lastName': authorization.lastName,
    'email': authorization.email,
    'accessToken': authorization.token
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleAuthorization);
    }
    return _serializeSingleAuthorization(data);
  }

};