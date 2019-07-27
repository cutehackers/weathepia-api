'use strict';

/**
 * host/articles/{:id} save, get, update, delete
 */

const ArticleController = require('../../interface_adapters/controllers/ArticleController');

module.exports = {
    name: 'articles',
    version: '1.0.0',
    register: async (server) => {
        server.route([
          {
            method: "POST",
            path: "/articles",
            handler: ArticleController.createArticle,
            options: {
              description: "Create an article",
              tags: ["api"]
            }
          },
          {
            method: "GET",
            path: "/articles",
            handler: ArticleController.getAllArticles,
            options: {
              description: "Get list of articles",
              tags: ["api"]
            }
          },
          {
            method: "GET",
            path: "/articles/{id}",
            handler: ArticleController.getArticleById,
            options: {
              description: "Get an article",
              tags: ["api"]
            }
          },
          {
            method: "DELETE",
            path: "/articles/{id}",
            handler: ArticleController.deleteArticle,
            options: {
              description: "Delete aan articles",
              tags: ["api"]
            }
          }
        ]);
    }
};
