
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chefs').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {id: 1, first_name: '',last_name:'', location:'', contact:'', username:'', password: '', email_address:'', avatar_url: ''},
        {id: 2, first_name: '',last_name:'', location:'', contact:'', username:'', password: '', email_address:'', avatar_url: ''},
        {id: 3, first_name: '',last_name:'', location:'', contact:'', username:'', password: '', email_address:'', avatar_url: ''},
        {id: 4, first_name: '',last_name:'', location:'', contact:'', username:'', password: '', email_address:'', avatar_url: ''},
        {id: 5, first_name: '',last_name:'', location:'', contact:'', username:'', password: '', email_address:'', avatar_url: ''}
      ]);
    });
};
