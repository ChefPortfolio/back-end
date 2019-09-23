
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 2, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 3, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 4, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 5, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 6, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 7, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 8, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 9, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 10, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 11, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 12, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 13, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 14, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 15, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 16, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 17, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 18, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 19, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 20, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 21, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 22, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 23, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 24, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''},
        {id: 25, title: '', description:'', instructions:'', meal_type:'', chef_id:'', pic_url:''}
   
      ]);
    });
};
