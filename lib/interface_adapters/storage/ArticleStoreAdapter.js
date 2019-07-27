'use strict';

/**
 * Sequelize
 * http://docs.sequelizejs.com/manual/getting-started.html
 */
const sequelize = require('../../frameworks_drivers/database/sequelize');
const Article = require('../../enterprise_business_rules/entities/Article');

module.exports = class {
  constructor() {
    this.db = sequelize;
    this.model = this.db.model("Articles");
  }

  async create(articleEntity) {
    const { content } = articleEntity;

    const seqArticle = await this.model.create({ content });
    await seqArticle.save();

    return new Article(
      seqArticle.id,
      seqArticle.content
    )
  }

  async getAll() {
    const seqArticles = await this.model.findAll();
    return seqArticles.map(article => {
      return new Article(article.id, article.content);
    })
  }

  async getById(id) {
    const seqArticle = await this.model.findByPk(id);
    return new Article(seqArticle.id, seqArticle.content);
  }

  async destroy(id) {
    const seqArticle = await this.model.findByPk(id);
    if (seqArticle) {
      return seqArticle.destroy();
    }
    return false;
  }
};
