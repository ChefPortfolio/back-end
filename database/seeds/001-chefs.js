
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chefs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {id: 1, first_name: 'John',last_name:'Monfriez', location:'Los Angelas', contact:'https://www.linkedin.com/', username:'johnny5', password: 'courage', email_address:'night_train@chefs.com', avatar_url: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'},
        {id: 2, first_name: 'Alexis',last_name:'Grey', location:'Seattle', contact:'https://www.linkedin.com/', username:'alexisg', password: 'medicine', email_address:'alexis_grey@chef.com', avatar_url: 'https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80'},
        {id: 3, first_name: 'Charlee',last_name:'Holden', location:'Denver', contact:'https://www.facebook.com/', username:'charhold', password: 'bones', email_address:'charlee_holden@chef.com', avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'},
        {id: 4, first_name: 'Bailey',last_name:'Beetle', location:'Chicago', contact:'https://www.facebook.com/', username:'bailey123', password: 'anatomy', email_address:'beetle_bailey@chef.com', avatar_url: 'https://images.unsplash.com/photo-1550228657-87643a6cdb1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'},
        {id: 5, first_name: 'Darius',last_name:'Rucker', location:'Nashville', contact:'https://www.instagram.com/', username:'drucker', password: 'wagonwheel', email_address:'hootie@chefs.com', avatar_url: 'https://images.unsplash.com/flagged/photo-1561350117-501b4661f8d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}
      ]);
    });
};
