const db = require('../database/dbConfig.js');

module.exports = {
  getRecipes,
  getById,
  add,
  update,
  remove,
};

function getRecipes() {
  return db('recipes as r')
  .join('chefs as c', 'c.id','r.chef_id')
  .select('c.avatar_url','r.title','r.description','r.instructions','r.meal_type','r.pic_url');
}
function getById(id) {
  return db('recipes').where({ id });
}

function add(recipe) {
  return db('recipes').insert(recipe);
}

function update(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('recipes')
    .where({ id })
    .del();
}
