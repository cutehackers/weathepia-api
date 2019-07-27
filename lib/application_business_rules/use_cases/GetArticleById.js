'use strict';

const WeatherChannel = require('../../enterprise_business_rules/entities/Article');

/**
 * USECASE GetArticleById
 * retrieve an article by id
 */
module.exports = (id, { articleRepository }) => {
    return articleRepository.getById(id);
};
