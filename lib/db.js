'use strict';

const MongoClient = require('./clients/mongoclient');
const mergeJSON = require('merge-json');


if (typeof global.camo === 'undefined') {
    global.camo = {clients: {}, default: {}};
}

class DB {
    /**
     * Connect to current database
     *
     * @param {Object} config
     * @returns {Promise}
     */

    connect(config) {
        this.config = config;
        this.buildConnection();

        if (config.type == 'mongodb') {
            return this.buildMongo().then(connection => this.connectMongo(connection))
                .catch(error => Promise.reject(error));
        } else {
            return Promise.reject(new Error('Unrecognized DB connection string.'));
        }
    }

    /**    connectionString: this.config.type + '://' + this.config.login + ':'
     + this.config.password + '@' + this.config.host + ':'
     + this.config.port + '/' + this.config.db,
     connectionName: this.config.connectionName,
     options: this.config.options,
     isDefault: this.config.isDefault
     */



    buildConnection() {
        if (typeof(this.config.options) === 'undefined') {
            this.config.options = {};
        }
        if (typeof(this.config.meta) === 'undefined') {
            this.config.meta = {};
        }

        this.connectionConf = mergeJSON.merge({
            connectionString: this.config.type + '://' + this.config.login + ':'
            + this.config.password + '@' + this.config.host + ':'
            + this.config.port + '/' + this.config.db,
        }, this.config.meta);
    }

    connectMongo(connection) {
        global.camo.clients[this.connectionConf.connectionName] = connection;

        if (this.connectionConf.isDefault) {
            global.camo.default.client = connection;
        }

        return Promise.resolve();
    }


    buildMongo() {
        return MongoClient.connect(this.connectionConf);
    }
}


exports.DB = DB;