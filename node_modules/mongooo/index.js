'use strict';

const Mongooo = require('./lib/mongo/index');

const Find = require('./lib/mongo/find');
const Save = require('./lib/mongo/insert');
const Update = require('./lib/mongo/update');
const Delete = require('./lib/mongo/delete');
const Option = require('./lib/mongo/option');

const Compress = require('./lib/compress/index');

module.exports = {Mongooo, Find, Save, Update, Delete, Option, Compress};