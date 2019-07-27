"use strict";

module.exports = (id, { articleRepository }) => {
  return articleRepository.destroy(id);
};
