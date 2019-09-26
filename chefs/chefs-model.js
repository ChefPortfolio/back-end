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
};
function getById(id) {
  return db('chefs').where({ id });
};

function add(chef) {
<<<<<<< HEAD
  const [id] =  db('chefs').insert(chef, id);
  return  db('chefs')
  .where ({ id })
  ,first();
=======
  const [id] = db('chefs').insert(chef, id);
  return db('chefs')
  .where({ id })
  .first();
>>>>>>> 6a1dbfa692e0ed2b0c1f1149280a9dae68657db4
};

function getChefRecipes(id) {
  return db('recipes as r')
  .join('chefs as c', 'c.id', 'r.chef_id')
  .select('r.title','r.description','r.instructions','r.meal_type','r.pic_url','c.avatar_url')
  .where({ 'r.chef_id':id })
};

function update(id, changes) {
  return db('chefs')
    .where({ id })
    .update(changes);
};

function remove(id) {
  return db('chefs')
    .where({ id })
    .del();
};
