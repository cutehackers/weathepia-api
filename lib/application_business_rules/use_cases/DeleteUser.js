'use strict';

module.exports = (userId, { userRepository }) => {
  return userRepository.destroy(userId);
};
