'use strict';

module.exports = (email, { userRepository }) => {
  return userRepository.exists(email);
};
