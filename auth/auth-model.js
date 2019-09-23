const db = require('../database/dbConfig.js');

module.exports = {
  findBy,
  add,
  get,
 
};

const get = () => {
  return db('users')
};

function findBy({username}) {
  return db('users').where({ username });
};
  
function add(user) {
  return db('users').insert(user);
};