'use strict';

module.exports = class {
  
  constructor(dataStoreAdapter) {
    this.dataStoreAdapter = dataStoreAdapter;
  }

  create(userEntity) {
    return this.dataStoreAdapter.create(userEntity);
  }

  update(userEntity) {
    return this.dataStoreAdapter.update(userEntity);
  }

  destroy(userId) {
    return this.dataStoreAdapter.destroy(userId);
  }

  get(userId) {
    return this.dataStoreAdapter.get(userId);
  }

  getByEmail(email) {
    return this.dataStoreAdapter.getByEmail(email);
  }

  getAll() {
    return this.dataStoreAdapter.getAll();
  }

};