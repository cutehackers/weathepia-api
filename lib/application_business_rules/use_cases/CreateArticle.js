'use strict';

const Article = require('../../enterprise_business_rules/entities/Article');

/**
 * USECASE CreateArticle
 * create an entity in table Articles
 */
module.exports = (content, { articleRepository }) => {
  const article = new Article(null, content);
  return articleRepository.create(article);
}
