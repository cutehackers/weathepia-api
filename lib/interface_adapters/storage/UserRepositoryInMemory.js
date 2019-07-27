'use strict';

const User = require('../../enterprise_business_rules/entities/User');

/**
 * Not used
 */
module.exports = class {

  _initializeRepositoryWithTwoUsers() {
    const john = new User(null, 'John', 'Doe', 0, 'john.doe@mail.com', 'ABCD1234');     // general
    const jane = new User(null, 'Jane', 'Smith', 1, 'jane.smith@mail.com', 'EFGH5678'); // admin
    this.create(john).then(() => this.create(jane));
  }

  _dataAsArray() {
    return Object.keys(this.data).map(key => this.data[key]);
  }

  constructor() {
    this.index = 1;
    this.data = {};
    this._initializeRepositoryWithTwoUsers();
  }

  create(userEntity) {
    const row = Object.assign({}, userEntity);
    const rowId = this.index++;
    row.id = rowId;
    this.data[rowId] = row;
    return Promise.resolve(row);
  }

  update(userEntity) {
    let row = this.data[userEntity.id];
    Object.assign(row, userEntity);
    return Promise.resolve(row);
  }

  destroy(userId) {
    delete this.data[userId];
    return Promise.resolve();
  }

  get(userId) {
    return Promise.resolve(this.data[userId]);
  }

  getByEmail(userEmail) {
    const users = this._dataAsArray();
    return Promise.resolve(users.find(user => user.email === userEmail));
  }

  getAll() {
    return Promise.resolve(this._dataAsArray());
  }

};