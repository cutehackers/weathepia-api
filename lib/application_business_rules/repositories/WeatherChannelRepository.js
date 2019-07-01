'use strict';

module.exports = class {

    constructor(dataStoreAdapter) {
        this.dataStoreAdapter = dataStoreAdapter;
    }

    save(weatherChannelEntity) {
        return this.dataStoreAdapter.save(weatherChannelEntity);
    }

    getAll() {
        return this.dataStoreAdapter.getAll();
    }
};