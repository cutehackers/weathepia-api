'use strict';

const Boom = require('@hapi/boom');
const ArticleRepository = require('../../application_business_rules/repositories/ArticleRepository');
const ArticleStoreAdapter = require('../storage/ArticleStoreAdapter');
const ArticleSerializer = require('../serializers/ArticleSerializer');
const CreateArticle = require('../../application_business_rules/use_cases/CreateArticle');
const GetAllArticles = require('../../application_business_rules/use_cases/GetAllArticles');
const GetArticleById = require('../../application_business_rules/use_cases/GetArticleById');
const DeleteArticle = require('../../application_business_rules/use_cases/DeleteArticle');

const articleRepository = new ArticleRepository(new ArticleStoreAdapter());

module.exports = {
  async createArticle(request) {
    // input
    const { content } = request.payload;

    // usecase
    const article = await CreateArticle(content, { articleRepository });

    // output
    const serializers = new ArticleSerializer();
    return serializers.serialize(article);
  },

  async getAllArticles(request) {
    // usecase
    const articles = await GetAllArticles({ articleRepository });

    // output
    const serializers = new ArticleSerializer();
    return serializers.serialize(articles);
  },

  async getArticleById(request) {
    // input
    const id = request.params.id;

    // usecase
    const article = await GetArticleById(id, { articleRepository });

    // output
    const serializers = new ArticleSerializer();
    return serializers.serialize(article);
  },

  async deleteArticle(request, h) {
    // input
    const id = request.params.id;

    // usecase
    const result = await DeleteArticle(id, { articleRepository });
    if (!result) {
      return Boom.unauthorized("Invalid article information");
    }

    // output
    return h.response().code(204);
  }
}