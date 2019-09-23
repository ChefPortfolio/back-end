

exports.up = function(knex, Promise) {
 
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
      tbl.boolean('isChef');
    
    })
  
    .createTable('chefs',tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('location').notNullable();
        tbl.string('contact').notNullable();
        // FK
        tbl.integer('user_id').unique().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    
    })
  
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title').notNullable();
        tbl.string('description');
        tbl.string('meal_type');
        tbl.integer('chef_id').notNullable().references('id').inTable('chefs').onDelete('CASCADE').onUpdate('CASCADE');
  
    })
   
   
    .createTable("ingredients", tbl => {
        tbl.integer();
        tbl.string("ingredient_name").notNullable();
  
    })
  
    .createTable('recipe_photo', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE')
    })
  
    .createTable('steps', tbl => {
        tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE')
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.string('description').notNullable;
    })
  
    .createTable('measurement-recipe-ingredient', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('measurement').notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('chefs')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe_photo')
      .dropTableIfExists('steps')
      .dropTableIfExists('measurement-recipe-ingredient')
      };
