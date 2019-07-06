'use strict';

const sequelize = require('../../frameworks_drivers/database/sequelize');
const User = require('../../enterprise_business_rules/entities/User');

module.exports = class {

  constructor() {
    this.db = sequelize;
    this.model = this.db.model('Users');
  }

  async create(userEntity) {
    const { firstName, lastName, email, password } = userEntity;
    const seqUser = await this.model.create({ firstName, lastName, email, password });
    await seqUser.save();

    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
  }

  async update(userEntity) {
    const seqUser = await this.model.findByPk(userEntity.id);

    if (!seqUser) return false;

    const { firstName, lastName, email, password } = userEntity;
    await seqUser.update({ firstName, lastName, email, password });

    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
  }

  /**
   * @param {DataTypes.INTEGER(11)} userId 
   * @return number of entities affected, otherwise false
   */
  async destroy(userId) {
    const seqUser = await this.model.findByPk(userId);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async get(userId) {
    const seqUser = await this.model.findByPk(userId);
    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
  }

  async getByEmail(userEmail) {
    const seqUser = await this.model.findOne({ where: { email: userEmail } });
    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
  }

  async getAll() {
    const seqUsers = await this.model.findAll();
    return seqUsers.map((seqUser) => {
      return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.email, seqUser.password);
    });
  }

  async exists(userEmail) {
    const seqUser = await this.model.findOne({ where: { email: userEmail } });
    return seqUser ? true : false;
  }

};