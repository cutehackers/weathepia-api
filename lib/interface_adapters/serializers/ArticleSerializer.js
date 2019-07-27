"use strict";

const _serializeSingleArticle = article => {
  return {
    id: article.id,
    content: article.content
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error("Expect data to be not undefined nor null");
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleArticle);
    }
    return _serializeSingleArticle(data);
  }
};
