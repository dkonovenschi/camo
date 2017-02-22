'use strict';

const assertConnected = function (db) {
    if (db === null || db === undefined) {
        throw new Error('You must first call \'connect\' before loading/saving documents.');
    }
};

exports.getDefaultClient = function () {
    const client = global.camo.default.client;
    assertConnected(client);
    return client;
};

exports.getClient = function (name) {
    const client = global.camo.clients[name];
    assertConnected(client);
    return client;
}