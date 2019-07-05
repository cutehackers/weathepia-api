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
};