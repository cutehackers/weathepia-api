'use strict';

const _createSingleWeatherChannel = (weatherChannel) => {
    return {
        id: weatherChannel.id,
        uid: weatherChannel.uid,
        city: weatherChannel.city
    };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error("Expect data to be not undefined nor null");
    }
    if (Array.isArray(data)) {
      return data.map(_createSingleWeatherChannel);
    }
    return _createSingleWeatherChannel(data);
  }
};
