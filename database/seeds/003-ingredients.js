
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'chicken'},
        {id: 2, ingredient_name: 'kosher salt'},
        {id: 3, ingredient_name: 'buttermilk'},
        {id: 4, ingredient_name: 'pickle brine'},
        {id: 5, ingredient_name: 'Louisiana-style hot sauce'},
        {id: 6, ingredient_name: 'egg'},
        {id: 7, ingredient_name: 'all-purpose-flour'},
        {id: 8, ingredient_name: 'table salt'},
        {id: 9, ingredient_name: 'butter'},
        {id: 10, ingredient_name: 'lard'},
        {id: 11, ingredient_name: 'cayenne pepper'},
        {id: 12, ingredient_name: 'light brown sugar'},
        {id: 13, ingredient_name: 'paprika'},
        {id: 14, ingredient_name: 'garlic powder'},
        {id: 15, ingredient_name: 'ground black pepper'},
        {id: 16, ingredient_name: 'vegetable oil'},
        {id: 17, ingredient_name: 'potato'},
        {id: 18, ingredient_name: 'bacon grease'},
        {id: 19, ingredient_name: 'bread'},
        {id: 20, ingredient_name: 'margarine'},
        {id: 21, ingredient_name: 'assorted vegetables'},
        {id: 22, ingredient_name: 'turkey bacon'},
        {id: 23, ingredient_name: 'water'},
        {id: 24, ingredient_name: 'low-fat cheddar cheese'},
        {id: 25, ingredient_name: 'whole wheat tortillas'},
        {id: 26, ingredient_name: 'skinless, boneless chicken breast halves'},
        {id: 27, ingredient_name: 'lemonade'},
        {id: 28, ingredient_name: 'olive oil'},
        {id: 29, ingredient_name: 'lime juice'},
        {id: 30, ingredient_name: 'Worcestershire sauce'},
        {id: 31, ingredient_name: 'garlic powder'},
        {id: 32, ingredient_name: 'onion powder'},
        {id: 33, ingredient_name: 'bay leaf'},
        {id: 34, ingredient_name: 'corn tortillas'},
        {id: 35, ingredient_name: 'lettuce'},
        {id: 36, ingredient_name: 'tomatoes'},
        {id: 37, ingredient_name: 'sharp cheddar cheese'},
        {id: 38, ingredient_name: 'salsa'},
        {id: 39, ingredient_name: 'sour cream'},
        {id: 40, ingredient_name: 'horseradish mustard'},
        {id: 41, ingredient_name: 'onion'},
        {id: 42, ingredient_name: 'poppy seeds'},
        {id: 43, ingredient_name: 'dill seed'},
        {id: 44, ingredient_name: 'swiss cheese'},
        {id: 45, ingredient_name: 'cooked ham'},
        {id: 46, ingredient_name: 'hamburger buns'},
        {id: 47, ingredient_name: 'baking powder'},
        {id: 48, ingredient_name: 'white sugar'},
        {id: 49, ingredient_name: 'milk'},
        {id: 50, ingredient_name: 'pork chop'},
        {id: 51, ingredient_name: 'Gouda cheese'},
        {id: 52, ingredient_name: 'spinach'},
        {id: 53, ingredient_name: 'breadcrumbs'},
        {id: 54, ingredient_name: 'Creole-style seasoning'},
        {id: 55, ingredient_name: 'bacon'},
        {id: 56, ingredient_name: 'ramen noodles'},
        {id: 57, ingredient_name: 'hot sauce'},
        {id: 58, ingredient_name: 'minced garlic'},
        {id: 59, ingredient_name: 'black pepper'},
        {id: 60, ingredient_name: 'skinned,boned duck breast halves'},
        
        {id: 61, ingredient_name: 'vanilla extract'},
        {id: 62, ingredient_name: 'lemon zest'},
        {id: 63, ingredient_name: 'lemon juice'},
        {id: 64, ingredient_name: 'vegetable broth'},
        {id: 65, ingredient_name: 'ramen noodles with dried vegetables'},
        {id: 66, ingredient_name: 'soy sauce'},
        {id: 67, ingredient_name: 'chili oil'},
        {id: 68, ingredient_name: 'minced ginger root'},
        {id: 69, ingredient_name: 'green onions'},
        {id: 70, ingredient_name: 'ground cinnamon'},
        {id: 71, ingredient_name: 'shortening'},
        {id: 72, ingredient_name: 'egg yolk'},
        {id: 73, ingredient_name: 'Marsala wine'},
        {id: 74, ingredient_name: 'distilled white vinegar'},
        {id: 75, ingredient_name: 'egg white'},
        {id: 76, ingredient_name: 'ricotta cheese'},
        {id: 77, ingredient_name: 'confectioners sugar'},
        {id: 79, ingredient_name: 'semisweet chocolate'},
        
        {id: 80, ingredient_name: 'oven roasted turkey'},
        {id: 81, ingredient_name: 'Swiss chard'},
        {id: 82, ingredient_name: 'radish sprouts'},
        {id: 83, ingredient_name: 'red bell pepper'},
        {id: 84, ingredient_name: 'yellow bell pepper'},
        {id: 85, ingredient_name: 'orange bell pepper'},
        {id: 86, ingredient_name: 'rice wine vinegar'},
        {id: 87, ingredient_name: 'honey'},
        {id: 88, ingredient_name: 'white rice'},
        {id: 89, ingredient_name: 'bean sprouts'},
        {id: 90, ingredient_name: 'shrimp'},
        {id: 91, ingredient_name: 'green onion'},
        {id: 92, ingredient_name: 'sesame oil'},
        {id: 93, ingredient_name: 'chocolate pudding'},
        {id: 94, ingredient_name: 'baking soda'},
        {id: 95, ingredient_name: 'dried cranberries'},
        {id: 96, ingredient_name: 'walnuts'},
        {id: 97, ingredient_name: 'white mushrooms'},
        {id: 98, ingredient_name: 'steak sauce'},
        {id: 99, ingredient_name: 'ground beef'},
        
        {id: 100, ingredient_name: 'wheat buns'},
        {id: 101, ingredient_name: 'beefsteak tomato'},
        {id: 102, ingredient_name: 'avocado'},
        {id: 103, ingredient_name: 'champagne vinegar'},
        {id: 104, ingredient_name: 'Italian dressing'},
        {id: 105, ingredient_name: 'barbeque sauce'},
        {id: 106, ingredient_name: 'steak seasoning'},
        {id: 107, ingredient_name: 'seasoning salt'},
        {id: 108, ingredient_name: 'beef sirloin steak'},
        
        {id: 109, ingredient_name: 'baby bok choy'},
        {id: 110, ingredient_name: 'slivered toasted almonds'},
        {id: 111, ingredient_name: 'chow mein noodles'},
        
        {id: 112, ingredient_name: 'tomato paste'},
        {id: 113, ingredient_name: 'dried oregano'},
        {id: 114, ingredient_name: 'basil'},
        {id: 115, ingredient_name: 'yeast'},
        {id: 116, ingredient_name: 'pepperoni'},
        {id: 117, ingredient_name: 'mozzarella cheese'},
       
        {id: 118, ingredient_name: 'mango'},
        {id: 119, ingredient_name: 'jalapeno'},
        {id: 120, ingredient_name: 'cilantro'},
        {id: 121, ingredient_name: 'red onion'},
        
        {id: 122, ingredient_name: 'maple syrup'},
        {id: 123, ingredient_name: 'maple sugar'},
        
        {id: 124, ingredient_name: 'linguine pasta'},
        {id: 125, ingredient_name: 'jumbo shrimp'},
        {id: 126, ingredient_name: 'Pinot Grigio wine'},
        {id: 127, ingredient_name: 'half-and-half'},
        {id: 128, ingredient_name: 'Parmesan cheese'},
        {id: 129, ingredient_name: 'parsley'},
        {id: 130, ingredient_name: 'salmon'},
        {id: 131, ingredient_name: 'lemon'}
       
      ]);
    });
};
