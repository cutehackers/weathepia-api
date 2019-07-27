'use strict';

const User = require('../../enterprise_business_rules/entities/User');

module.exports = (firstName, lastName, type, email, password, { userRepository }) => {
  const user = new User(null, firstName, lastName, type, email, password);
  return userRepository.create(user);
};
