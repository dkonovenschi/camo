"use strict";

class DatabaseClient {
	constructor(url) {
		this._url = url;
	}

	save(collection, query, values) {
        throw new TypeError('You must override save.');
    }

    delete(collection) {
        throw new TypeError('You must override delete.');
    }

    deleteOne(collection, query) {
        throw new TypeError('You must override deleteOne.');
    }

    deleteMany(collection, query) {
        throw new TypeError('You must override deleteMany.');
    }

    loadOne(collection, query) {
        throw new TypeError('You must override loadOne.');
    }

    loadMany(collection, query) {
        throw new TypeError('You must override loadMany.');
    }

    static connect(url) {
		throw new TypeError('You must override connect (static).');
	}

	close() {
		throw new TypeError('You must override close.');
	}

    clearCollection(collection) {
        throw new TypeError('You must override clearCollection.');
    }

    dropDatabase() {
        throw new TypeError('You must override dropDatabase.');
    }

    driver() {
        throw new TypeError('You must override driver.');
    }
}

module.exports = DatabaseClient;