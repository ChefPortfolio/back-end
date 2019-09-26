const db = require('../database/dbConfig.js');

module.exports = {
  findBy,
  add,
  get,
  login,
};

function get() {
  return db('chefs')
};

function findBy({ username }) {
  return db('chefs').where({ username }).first();
};

function login(filter) {
  return db('chefs').where(filter);
};
  
function add(user) {
  return db('chefs').insert(user, 'id');
};
