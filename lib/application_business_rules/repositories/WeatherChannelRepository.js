'use strict';

module.exports = class {

    constructor(dataStoreAdapter) {
        this.dataStoreAdapter = dataStoreAdapter;
    }

    create(weatherChannelEntity) {
        return this.dataStoreAdapter.create(weatherChannelEntity);
    }

    getAll() {
        return this.dataStoreAdapter.getAll();
    }

    getAllByUserId(uid) {
        return this.dataStoreAdapter.getAllByUserId(uid);
    }

    destroy(id) {
        return this.dataStoreAdapter.destroy(id);
    }
};