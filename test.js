"use strict";

let camo = require('./index');

let connect = camo.DB;

(new connect).connect({
    type: 'mongodb',
    login: 'adm',
    password: 'adm',
    host: 'localhost',
    port: '27017',
    db: 'testing',

    meta: {
        connectionName: 'main',
        isDefault: true
    }
}).then(() => console.log('success'))
    .catch((error) => console.log(error));