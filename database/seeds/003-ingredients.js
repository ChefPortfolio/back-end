
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, ingredient_name: ''},
        {id: 2, ingredient_name: ''},
        {id: 3, ingredient_name: ''},
        {id: 4, ingredient_name: ''},
        {id: 5, ingredient_name: ''},
        {id: 6, ingredient_name: ''},
        {id: 7, ingredient_name: ''},
        {id: 8, ingredient_name: ''},
        {id: 9, ingredient_name: ''},
        {id: 10, ingredient_name: ''},
        {id: 11, ingredient_name: ''},
        {id: 12, ingredient_name: ''},
        {id: 13, ingredient_name: ''},
        {id: 14, ingredient_name: ''},
        {id: 15, ingredient_name: ''},
        {id: 16, ingredient_name: ''},
        {id: 17, ingredient_name: ''},
        {id: 18, ingredient_name: ''},
        {id: 19, ingredient_name: ''},
        {id: 20, ingredient_name: ''},
        {id: 21, ingredient_name: ''},
        {id: 22, ingredient_name: ''},
        {id: 23, ingredient_name: ''},
        {id: 24, ingredient_name: ''},
        {id: 25, ingredient_name: ''},
       
      ]);
    });
};
