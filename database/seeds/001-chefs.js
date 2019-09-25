
xports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chefs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {id: 1, first_name: 'John',last_name:'Monfriez', location:'Los Angelas', contact:'https://www.linkedin.com/in/johnny-5/', username:'johnny5', password: 'courage', email_address:'night_train@chefs.com', avatar_url: ''},
        {id: 2, first_name: 'Alexis',last_name:'Grey', location:'Seattle', contact:'https://www.linkedin.com/in/alexis-grey/', username:'alexisg', password: 'medicine', email_address:'alexis_grey@chef.com', avatar_url: ''},
        {id: 3, first_name: 'Charlee',last_name:'Holden', location:'Denver', contact:'https://www.facebook.com/in/alexis-grey/', username:'charhold', password: 'bones', email_address:'charlee_holden@chef.com', avatar_url: ''},
        {id: 4, first_name: 'Bailey',last_name:'Beetle', location:'Chicago', contact:'https://www.facebook.com/in/alexis-grey/', username:'bailey123', password: 'anatomy', email_address:'beetle_bailey@chef.com', avatar_url: ''},
        {id: 5, first_name: 'Darius',last_name:'Rucker', location:'Nashville', contact:'https://www.instagram.com/drucker/', username:'', password: '', email_address:'', avatar_url: ''}
      ]);
    });
};
