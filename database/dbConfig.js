const knex = require('knex');

const secrets = require('../secrets.js');

const environment = secrets.environment || 'development';
const config = require('../knexfile.js')[environment];

const db = knex(config.development);

module.exports = db;