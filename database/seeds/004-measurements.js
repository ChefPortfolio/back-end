
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 2, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 3, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 4, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 5, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 6, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 7, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 8, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 9, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 10, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 11, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 12, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 13, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 14, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 15, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 16, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 17, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 18, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 19, recipe_id: '', ingredient_id:'', measurement:''},
        {id: 20, recipe_id: '', ingredient_id:'', measurement:''},
      ]);
    });
};
