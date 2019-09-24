const db = require('../database/dbConfig.js');

module.exports = {
  getChefs,
  getById,
  add,
  getChefRecipes,
  update,
  remove,
};

function getChefs() {
  return db('chefs');
}
function getById(id) {
  return db('chefs').where({ id });
}

function add(chef) {
  return db('chefs').insert(chef);
}

function getChefRecipes(id) {
  return db('chefs')
  .join('recipes')
  .where({ id })
  
}

function update(id, changes) {
  return db('chefs')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('chefs')
    .where({ id })
    .del();
}
