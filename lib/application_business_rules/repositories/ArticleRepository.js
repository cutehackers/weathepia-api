"use strict";

module.exports = class {
  constructor(dataStoreAdapter) {
    this.dataStoreAdapter = dataStoreAdapter;
  }

  create(articleEntity) {
    return this.dataStoreAdapter.create(articleEntity);
  }

  getAll() {
    return this.dataStoreAdapter.getAll();
  }

  getById(id) {
    return this.dataStoreAdapter.getById(id);
  }

  destroy(id) {
    return this.dataStoreAdapter.destroy(id);
  }
};
