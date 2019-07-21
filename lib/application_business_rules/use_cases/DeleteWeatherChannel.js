'use strict';

module.exports = (id, { weatherChannelRepository }) => {
  return weatherChannelRepository.destroy(id);
};
