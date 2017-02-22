'use strict';

exports.DB = require('./lib/db').DB;
exports.getClient = require('./lib/clients').getDefaultClient;

exports.Document = require('./lib/document');
exports.EmbeddedDocument = require('./lib/embedded-document');
