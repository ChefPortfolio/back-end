
exports.up = function(knex, Promise) {
 
    return knex.schema.createTable('chefs',tbl => {
        tbl.increments()
        tbl.string('first_name', 128).notNullable();
        tbl.string('last_name', 128).notNullable();
        tbl.string('location', 255);
        tbl.string('contact', 255);
        tbl.string('username', 25).unique().notNullable();
        tbl.string('password', 22).notNullable();
        tbl.string('email_address', 55).notNullable();
        tbl.string('avatar_url', 255);
    })
  
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title', 255).notNullable();
        tbl.text('description');
        tbl.text('instructions').notNullable();
        tbl.string('meal_type', 55);
        tbl.integer('chef_id').notNullable().references('id').inTable('chefs').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('pic_url', 200);
    })
   
   
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("ingredient_name").notNullable();
    })
  
  
    .createTable('measurement_recipe_ingredient', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredients').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('measurement').notNullable();
    });
};
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('measurement_recipe_ingredient')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('chefs')
    };
