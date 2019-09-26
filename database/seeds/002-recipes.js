
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, title: 'Nashville Hot Chicken', 
          description:'If you have never had Nashville Hot Chicken, we are talking about an ultra-crispy fried chicken doused with a cayenne-infused glaze, and by glaze I mean melted butter and lard.', 
          instructions:'Toss chicken pieces with 1 tablespoon kosher salt. Transfer chicken to a bowl; cover and refrigerate overnight. Whisk buttermilk, pickle brine, hot sauce, and egg together in a mixing bowl. Pour marinade over chicken and stir to ensure each piece is thoroughly coated. Cover and let chicken marinate in refrigerator 2 to 4 hours. Mix flour and salt together in a shallow flat dish. Remove chicken from marinade and blot with paper towels. Reserve marinade. Toss chicken in flour until thoroughly coated. Return chicken to marinade, coating all sides; remove chicken from marinade allowing excess to drip back into the bowl. Coat the chicken once again in flour mixture. Place on a rack. Repeat with all chicken pieces. Allow to sit out about 15 minutes to allow coating to dry out a bit. Place butter and lard in a large pot. Add cayenne pepper, brown sugar, paprika, garlic powder, kosher salt, and black pepper. Place over medium-high heat. Cook and stir until fats melt. Remove from heat; keep sauce warm. Fill cast iron skillet about 1/3 of the way with vegetable oil. Heat oil to 350 degrees F over medium-high heat. Carefully place chicken into hot oil, skin side down. Maintain an oil temperature of 325 degrees F, adjusting heat as need. Fry until instant read thermometer reads 160 degrees F, 8 to 10 minutes per side. Transfer chicken to a rack to drain. Brush with the sauce on both sides.',
          meal_type:'dinner', 
          chef_id: 1 ,
          pic_url:'https://i0.wp.com/www.fromachefskitchen.com/wp-content/uploads/2018/05/Nashville-Style-Hot-Fried-Chicken-9.jpg?fit=600%2C900&ssl=1'
        },//ingredients checked
        {
          id: 2,
          title: 'Home-style Potato Chips',
          description:'Making home-style potato chips is fun and easy. Guaranteed they will not last long! A food processor with a slicing attachment is very helpful. ', 
          instructions:'Place potato slices into a large bowl of cold water as you slice. Drain, and rinse, then refill the bowl with water, and add the salt. Let the potatoes soak in the salty water for at least 30 minutes. Drain, then rinse and drain again. Heat oil in a deep-fryer to 365 degrees F (185 degrees C). Fry potato slices in small batches. Once they start turning golden, remove and drain on paper towels. Continue until all of the slices are fried. Season with additional salt if desired. Watch Now', 
          meal_type:'snack', 
          chef_id:1, 
          pic_url:'https://www.usfoods.com/etc/commerce/products/usfoods/70/95/7095673/image.img.jpg/cq_ck_1555442977066.jpg'
        },//ingredients checked
        {
          id: 3, 
          title: 'Egg in a Hole', 
          description:'A delicious runny yolk egg cooked in the center of a piece of toast and eaten with a fork is a great way to enjoy an egg in a slightly different way.', 
          instructions:'Melt the bacon grease in a non-stick pan over low heat. Cut a 1 1/2 to 2-inch hole from the center of the bread slice; lay in the hot skillet. When the side facing down is lightly toasted, about 2 minutes, flip and crack the egg into the hole; season with salt and pepper. Continue to cook until the egg is cooked and mostly firm. Flip again and cook 1 minute more to assure doneness on both sides. Serve immediately.', 
          meal_type:'breakfast', 
          chef_id:1, 
          pic_url:'https://iamafoodblog.com/wp-content/uploads/2019/01/how-to-make-egg-in-a-hole-5104.jpg'
        },//ingredients checked
        {
          id: 4, 
          title: 'Toasted Breakfast Burritos', 
          description:'Breakfast On-The-Go has never looked or tasted this good! Great protein breakfast that will help fuel your busy day.', 
          instructions:'Melt 1 tablespoon I Can not Believe It is Not Butter!(R) Spread in medium nonstick skillet over medium-high heat and cook vegetables and bacon, stirring occasionally, until vegetables are tender and bacon is crisp, about 4 minutes. Meanwhile, combine eggs and water in small bowl with wire whisk. Add eggs into skillet and stir until eggs are set. Remove egg and vegetable mixture from skillet and evenly divide between tortillas. Top with cheese; then roll. To seal and toast burritos, wipe skillet with paper towels and melt remaining 1/2 tablespoon Spread over medium heat. Arrange burritos, seam-side-down and cook, turning once, until golden brown, about 2 minutes.', 
          meal_type:'breakfast', 
          chef_id:1, 
          pic_url:'https://i.pinimg.com/originals/41/47/2a/41472a1a627474847d2066669b715fed.jpg'
        },//ingredients checked
        {
          id: 5, 
          title: 'Chicken Tacos', 
          description:'This recipe is quick and easy - good for those nights you do not have a lot of time for dinner preparations.', 
          instructions:'In a large skillet over medium heat, combine chicken, lemonade, olive oil, lime juice, and Worcestershire sauce. Season with garlic powder, onion powder, and bay leaf. Simmer until chicken is no longer pink, and juices run clear, 15 to 20 minutes. Meanwhile, warm the tortillas in the oven or microwave until soft. When chicken is fully cooked, transfer to serving bowl. Place lettuce, tomatoes, cheese, salsa, and sour cream in serving dishes. Each person can create their own wrap, using their preferred ingredients.', 
          meal_type:'dinner', 
          chef_id:1, 
          pic_url:'https://gimmedelicious.com/wp-content/uploads/2019/01/Quick-Chicken-Tacos-food-truck-style-9.jpg'
        },//ingredients checked
        {
          id: 6, 
          title: 'Hot Ham and Cheese Sandwiches', 
          description:'Do not settle for ordinary ham and cheese sandwiches when you can make something deliciously different. The horseradish mustard dressing perfectly compliments the ham', 
          instructions:'Preheat oven to 250 degrees F (120 degrees C). Combine butter, mustard, onions, poppy seeds and dill seed. Spread insides of buns with this mixture. Place a slice of cheese and a slice of ham inside each bun. Wrap buns in foil and place in preheated oven. Bake for 15 to 20 minutes, until cheese has melted.', 
          meal_type:'lunch', 
          chef_id:2, 
          pic_url:'https://lilluna.com/wp-content/uploads/2018/03/Ham-and-Swiss-Sliders-LL3.jpg'
        },//ingredients checked
        {
          id: 7, 
          title: 'Old Fashioned Pancakes', 
          description:'This is a great recipe that I found in my family recipe book. Judging from the weathered look of this recipe card, this was a family favorite.', 
          instructions:'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
          meal_type:'breakfast', 
          chef_id:2, 
          pic_url:'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },//ingredients checked
        {
          id: 8, 
          title: 'Gouda and Spinach Stuffed Pork Chops', 
          description:'This turned out absolutely delicious! It is become a much requested dinner - and is fairly easy to make!', 
          instructions:'Preheat the oven to 400 degrees F (200 degrees C). Coat a 9x13 inch baking dish with cooking spray.  Lay each chop flat on cutting board, and with a sharp knife held parallel to the board, cut a pocket into the pork, leaving three sides intact. Stuff each chop with spinach, and then with cheese. Place panko crumbs in a shallow dish. Coat each chop with a thin layer of horseradish, and then roll in crumbs. Arrange chops in prepared baking dish. Sprinkle with Creole seasoning to taste. Bake in preheated oven for 45 minutes, or until brown and crispy.', 
          meal_type:'dinner', 
          chef_id:2, 
          pic_url:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/7/0/EI1103_Pork_Chops.jpg.rend.hgtvcom.826.620.suffix/1371585667101.jpeg'
        },//ingredients checked
        {
          id: 9, 
          title: 'Cheddar Ramen Noodle  with Fried Eggs', 
          description:'A breakfast dish with instant ramen, cheese, and bacon makes for a happy-and easy-morning meal', 
          instructions:'Preheat oven to 350 degrees F. Cook bacon (in batches, if necessary) in a 12-inch ovenproof nonstick skillet over medium heat, turning, until crisp, about 8 minutes. Transfer bacon to paper towels to drain. Remove skillet from heat and pour off all but 1 tablespoon bacon fat.  Bring a saucepan of salted water to a boil. Break each ramen noodle block into 4 pieces and cook, stirring occasionally, until just tender, about 3 minutes. Drain noodles in a colander and rinse under cold water. Heat bacon fat in skillet over medium-high heat until shimmering. Add noodles, spreading them evenly to cover bottom of skillet. Cook noodles, pressing on them occasionally with a slotted spatula, until underside is golden brown, 3 to 6 minutes. Slide ramen cake onto a large plate, invert a second plate over top, then flip cake over (so cooked side is now on top). Add 1 tablespoon oil to skillet. Slide ramen cake back into skillet and cook over medium-high heat, pressing it occasionally, until underside is golden brown, 3 to 5 minutes. Remove skillet from heat. Sprinkle cheese evenly over ramen cake and transfer skillet to oven. Bake until cheese is melted, 5 to 10 minutes. Slide ramen cake onto a cutting board and cut into 4 wedges. Wipe out skillet. Heat butter and remaining 1/2 tablespoon oil in skillet over medium heat. Crack eggs into skillet and cook to desired doneness, 2 to 3 minutes for runny yolks. Serve each ramen wedge with a fried egg and 2 slices bacon.', 
          meal_type:'snack', 
          chef_id:2, 
          pic_url:'https://images.unsplash.com/photo-1555232967-53f6f9d380ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },//ingredients checked
        {
          id: 10, 
          title: 'Grilled Wild Duck Breast', 
          description:'A simple way to treat SMALL duck - and it is a HUGE hit! It is like having steak. Use the breasts, save the rest of the bird for a stew or stock.', 
          instructions:'Stir together the Worcestershire sauce, olive oil, hot sauce, garlic, and pepper. Add the duck breasts, and toss well to coat. Cover, and marinate in the refrigerator for at least 30 minutes to overnight. Preheat a grill for medium-high heat. Grill the duck to desired doneness, about 5 minutes per side for medium-well, depending on the size of the breast, and the temperature of the grill.', 
          meal_type:'dinner', 
          chef_id:2, 
          pic_url:'https://i.pinimg.com/originals/28/98/60/289860304609add1a8f35f08d70acd1c.jpg'
        },//ingredients checked
        {
          id: 11, 
          title: 'Simple Lemon Cake', 
          description:'This simple lemon cake is perfect for picnics and parties. It is moist and soft.', 
          instructions:'Preheat the oven to 350 degrees F (175 degrees C). Grease a 9-inch square baking pan. Beat sugar and butter together in a mixing bowl using an electric mixer until light and fluffy. Beat in eggs and vanilla extract. Sift flour and baking powder together in a separate bowl; add to creamed mixture. Pour in milk, lemon zest, and lemon juice and mix until you achieve a smooth batter. Spoon batter into the prepared pan. Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 35 minutes', 
          meal_type:'dessert', 
          chef_id:3, 
          pic_url:'https://images.unsplash.com/photo-1508432310926-5712bcb79944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80'
        },//ingredients checked
        {
          id: 12, 
          title: 'Ramen Noodle Soup', 
          description:'This soup is just very very good....you can find ramen noodles at most supermarkets, or at Asian grocery stores.', 
          instructions:'In a medium saucepan combine broth and noodles. Cover and bring to a boil over high heat; stir to break up noodles. Reduce heat to medium and add soy sauce, chili oil and ginger. Simmer, uncovered, for 10 minutes. Stir in sesame oil and garnish with green onions.', 
          meal_type:'dinner', 
          chef_id:3, 
          pic_url:'https://images.unsplash.com/photo-1496114212242-bac8bd9de53d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },//ingredients checked
        {
          id: 13, 
          title: 'Cannoli', 
          description:'I spent a lot of time looking for a good recipe for cannoli shells and filling. Since no two were alike, and since instructions were a bit sketchy, I worked with a friend to come up with a good recipe, including some tips that we came up with along the way. Special equipment is needed such as cannoli tubes, a pasta machine and a pastry bag to help make these cannoli come out just like the ones at Italian restaurants and bakeries. Start with 1/2 cup of confectioners sugar, and then add more to taste.', 
          instructions:'In a medium bowl, mix together the flour, sugar and cinnamon. Cut in the shortening until it is in pieces no larger than peas. Make a well in the center, and pour in the egg, egg yolk, Marsala wine, vinegar and water. Mix with a fork until the dough becomes stiff, then finish it by hand, kneading on a clean surface. Add a bit more water if needed to incorporate all of the dry ingredients. Knead for about 10 minutes, then cover and refrigerate for 1 to 2 hours. Divide the cannoli dough into thirds, and flatten each one just enough to get through the pasta machine. Roll the dough through successively thinner settings until you have reached the thinnest setting. Dust lightly with flour if necessary. Place the sheet of dough on a lightly floured surface. Using a form or large glass or bowl, cut out 4 to 5 inch circles. Dust the circles with a light coating of flour. This will help you later in removing the shells from the tubes. Roll dough around cannoli tubes, sealing the edge with a bit of egg white. Heat the oil to 375 degrees F (190 degrees C) in a deep-fryer or deep heavy skillet. Fry shells on the tubes a few at a time for 2 to 3 minutes, until golden. Use tongs to turn as needed. Carefully remove using the tongs, and place on a cooling rack set over paper towels. Cool just long enough that you can handle the tubes, then carefully twist the tube to remove the shell. Using a tea towel may help you get a better grip. Wash or wipe off the tubes, and use them for more shells. Cooled shells can be placed in an airtight container and kept for up to 2 months. You should only fill them immediately or up to 1 hours before serving. To make the filling, stir together the ricotta cheese and confectioners sugar using a spoon. Fold in lemon zest and chocolate. Use a pastry bag to pipe into shells, filling from the center to one end, then doing the same from the other side. Dust with additional confectioners sugar and grated chocolate for garnish when serving.', 
          meal_type:'dessert', 
          chef_id: 3, 
          pic_url:'https://www.cookingclassy.com/wp-content/uploads/2015/02/cannoli9-srgb..jpg'
        },//ingredients checked
        {
          id: 14, 
          title: 'Vegetable Turkey Wrap', 
          description:'The crunchy matchstick-cut colorful bell peppers are rolled in a tortilla with sliced turkey, chard, and sprouts for a fresh-tasting lunch wrap', 
          instructions:'Lay tortilla on plate or flat surface. Layer Swiss chard, sprouts and pepper on tortilla. Pile turkey evenly in center of wrap. In a small bowl, whisk together vinegar, soy sauce, honey, salt and pepper to taste. Drizzle over turkey. Fold sides of tortilla to center. Fold bottom of tortilla up.',
          meal_type:'lunch', 
          chef_id: 3, 
          pic_url:'http://emilybites.com/wp-content/uploads/2016/12/Apple-Cheddar-Turkey-Wrap-2b-620x930.jpg'
        },//ingredients checked
        {
          id: 15, 
          title: 'Shrimp Fried Rice', 
          description:'The real shrimp fried rice, restaurant style. This is how I used to cook fried rice when my father still owned a restaurant.', 
          instructions:'In a saucepan bring water to a boil. Add rice and stir. Reduce heat, cover and simmer for 20 minutes. Set aside and allow rice to cool. Heat a large skillet or wok for 2 minutes. When the skillet or wok is hot, pour in vegetable oil, bean sprouts and onions. Mix well and cook for 3 minutes. Mix in cooled rice and shrimp and cook for another 3 minutes. Stirring constantly. Mix in green onions, eggs, salt, pepper, soy sauce and sesame oil. Cook for another 4 minutes, stirring continuously, until eggs are cooked and everything is blended evenly.', 
          meal_type:'dinner', 
          chef_id:3, 
          pic_url:'https://natashaskitchen.com/wp-content/uploads/2018/09/Shrimp-Fried-Rice-3.jpg'
        },//ingredients checked
        {
          id: 16, 
          title: 'Cranberry Chocolate-Dipped Cookies', 
          description:'Try a dip of deliciousness. Made with walnuts, dried cranberries and a secret ingredient, these chocolate-dipped chocolate chip cookies are scrumptious.', 
          instructions:'Heat oven to 375 degrees F. Beat butter, sugars, pudding mix and vanilla in large bowl with mixer until blended. Add eggs and baking soda; mix well. Gradually beat in flour. Stir in chocolate morsels, cranberries and nuts. Drop teaspoonfuls of dough, 2 inches apart, onto baking sheets. Bake 8 to 10 min. or until golden brown. Cool on baking sheets 3 min. Remove to wire racks; cool completely. Dip half of each cookie into melted chocolate. Place on waxed-paper covered baking sheet; let stand until chocolate is firm.', 
          meal_type:'dessert', 
          chef_id:4, 
          pic_url:'https://www.cookingclassy.com/wp-content/uploads/2017/11/chocolate-dipped-cranberry-cookies-3.jpg'
        },//ingredients checked
        {
          id: 17, 
          title: 'Avocado Steakhouse Burger', 
          description:'This beef and veggie burger adds extra produce to your burger patty making it more flavorful and juicy. Then it is topped with Fresh California Avocado, lettuce and tomato. It is great served with the Steakhouse Lite Ranch Sauce and fresh veggies like carrots and celery for dipping, making this a produce packed meal. Good source of Vitamin C, Calcium and Iron', 
          instructions:'In a bowl mix together the onion, bell pepper, mushrooms, steak sauce and lean ground beef. Mix very thoroughly with your hands to combine all ingredients. Divide the mixture into equal portions. With your hands press each portion into a ball and then shape into a patty. In a saute pan or on a flat griddle over medium low heat place the patties and grill for about 4 minutes, flip and grill an additional 4 minutes or until meat is thoroughly cooked. While beef and veggie burgers are grilling toast the buns. Top each bun base with the beef and veggie burger, then drizzle each with 1/2 tsp. steak sauce. Top with the lettuce, tomato, Fresh California Avocado and bun top.', 
          meal_type:'dinner', 
          chef_id:4, 
          pic_url:''
        },
        {
          id: 18, 
          title: 'Poached Eggs', 
          description:'Nothing too complicated here; we pretty much poach eggs like everybody else, except we have got a little step in the middle that makes it easier if you are doing this for a larger group.', 
          instructions:'Fill a bowl with ice water. Fill a saucepan with cold water and place over medium heat; stir in vinegar and salt. Bring to a gentle, slow simmer and reduce heat to low.  Break each egg into a separate small ramekin; place a ramekin close to the surface of the water and gently pour egg into the simmering water. Let egg white set for a minute or two and use a silicone spatula to gently lift egg from the bottom of the pan to prevent sticking. Cook until white is firm and yolk is runny, about 6 minutes.  Lift poached egg from water using a slotted spoon and transfer gently to bowl of ice water to stop the cooking process. Reheat eggs for 1 1/2 to 2 minutes in very gently simmering water and remove with a slotted spoon. Tap bottom of slotted spoon containing egg on a dry paper towel to remove any excess water before serving.', 
          meal_type:'breakfast', 
          chef_id:4, 
          pic_url:''
        },
        {
          id: 19, 
          title: 'Great Beef Steak', 
          description:'My friends request this flavorful marinade every time they come over for a barbeque! This is enough to make one steak. Increase the recipe for a crowd!', 
          instructions:'In a medium bowl, mix soy sauce, Italian-style salad dressing, barbque sauce, vegetable oil, garlic, steak seasoning, seasoning salt, salt and ground black pepper. Place steak in the mixture. Cover and marinate in the refrigerator 12 hours, or overnight. Turn the steak once during marination. Preheat an outdoor grill for medium to high heat and lightly oil grate. Cook steak on the prepared grill 5 to 7 minutes per side, or to desired doneness.', 
          meal_type:'dinner', 
          chef_id:4, 
          pic_url:'https://therecipecritic.com/wp-content/uploads/2018/01/worlds_best_steak_marinade-1-of-1.jpg'
        },
        {
          id: 20, 
          title: 'Bok Choy Salad', 
          description:'You would think that raw baby bok choy would give this salad a bitter taste, but the dressing makes all the difference.', 
          instructions:'In a glass jar with a lid, mix together olive oil, white vinegar, sugar, and soy sauce. Close the lid, and shake until well mixed. Combine the bok choy, green onions, almonds, and chow mein noodles in a salad bowl. Toss with dressing, and serve.', 
          meal_type:'snack', 
          chef_id:'4', 
          pic_url:'https://i1.wp.com/whiteplateblankslate.com/wp-content/uploads/2018/06/bok-choy-salad.jpg?fit=900%2C1345'
        },
        {
          id: 21, 
          title: 'Homemade Pepperoni Pizza', 
          description:'Quick, Easy and Delicious-Homemade pizza crust and tomato sauce has never been easier-and this recipe for pepperoni pizza produces a delicious classic!', 
          instructions:'For sauce: Combine all sauce ingredients with 1/2 cup water in a medium bowl; set aside for flavors to develop while making crust. Freeze remaining paste . For crusts: Combine 2 cups of flour with the dry yeast, sugar and salt. Add the water and oil and mix until well blended (about 1 minute). Gradually add enough remaining flour slowly, until a soft, sticky dough ball is formed. Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, if needed. (If using RapidRise(R) Yeast, let dough rest, covered, for 10 minutes.)  Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans. For pizzas: Preheat oven to 425 degrees F. Top crusts with sauce, pepperoni and cheese. Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly. For best results, rotate pizza pans between top and bottom oven racks halfway through baking.',
          meal_type:'dinner', 
          chef_id:'5', 
          pic_url:'https://ohsweetbasil.com/wp-content/uploads/2013/04/Want-the-perfect-recipe-for-pepperoni-Pizza-that-tastes-as-good-as-your-favorite-takeout-Click-through-ohsweetbasil.com_-e1414729085254.jpg'
          },
         {
           id: 22, 
           title: 'Avocado, Tomato and Mango Salsa', 
           description:'Looking for a refreshing salsa for a warm summer evening? This is our favorite. Serve with tortilla chips. This is also fantastic served on white fish.', 
           instructions:'In a medium bowl, combine the mango, avocado, tomatoes, jalapeno, cilantro, and garlic. Stir in the salt, lime juice, red onion, and olive oil. To blend the flavors, refrigerate for about 30 minutes before serving.', 
           meal_type:'snacks', 
           chef_id:'5', 
           pic_url:'https://cdn.deliciousmeetshealthy.com/wp-content/uploads/2015/09/Mango-Avocado-Salsa-1.jpg'
          },
         {
           id: 23, 
           title: 'Ultimate Maple Snickerdoodles', 
           description:'These have been voted the number one cookie that I bake (and I bake a lot!), and are loved by all who eat them. They are chewy mapley good!', 
           instructions:'Preheat oven to 350 degrees F (175 degrees C). Stir together the flour, baking powder, baking soda, and cinnamon. Set aside. In a large bowl, cream together the margarine and 1 cup of white sugar until light and fluffy. Beat in the egg and maple syrup. Gradually blend in the dry ingredients until just mixed. In a small dish, mix together the remaining 1/2 cup white sugar and the maple sugar. Roll dough into 1 inch balls, and roll the balls in the sugar mixture. Place cookies 2 inches apart on ungreased cookie sheets. Bake 8 to 10 minutes in the preheated oven. Cookies will be crackly on top and look wet in the middle. Remove from cookie sheets to cool on wire racks.', 
           meal_type:'dessert', 
           chef_id:'5', 
           pic_url:'https://i1.wp.com/www.alattefood.com/wp-content/uploads/2016/12/Maple-Snickerdoodles-64.jpg?fit=1750%2C3150&ssl=1'
        },
         {
           id: 24, 
           title: 'Creamy Shrimp Scampi with Half-and-Half', 
           description:'Dinner does not have to take forever -- prove it with this fast and delicious shrimp scampi recipe.', 
           instructions:'Bring a large pot of lightly salted water to a boil. Cook linguine at a boil until tender yet firm to the bite, about 8 minutes. While pasta cooks, melt 2 tablespoons butter in a skillet over medium heat. Add garlic and cook until fragrant and lightly browned, about 1 minute. Add shrimp and cook until tails start curling in, about 2 minutes per side. Add remaining butter, Pinot Grigio, lemon juice, half-and-half, and Parmesan cheese. Stir to incorporate. Drain linguine and divide noodles between 2 bowls. Serve shrimp mixture on top and garnish with parsley.', 
           meal_type:'dinner', 
           chef_id:'5', 
           pic_url:'https://juliasalbum.com/wp-content/uploads/2018/01/39785464471_d30ce2835e_c.jpg'
          },
        {
          id: 25, 
          title: 'Super Simple Salmon', 
          description:'This is a very simple but delicious way to prepare fresh salmon using just a few ingredients from your pantry.', 
          instructions:'Stir together the garlic powder, basil, and salt in a small bowl; rub in equal amounts onto the salmon fillets. Melt the butter in a skillet over medium heat; cook the salmon in the butter until browned and flaky, about 5 minutes per side. Serve each piece of salmon with a lemon wedge', 
          meal_type:'dinner', 
          chef_id:'5', 
          pic_url:'https://i0.wp.com/themom100.com/wp-content/uploads/2015/12/Crow_30D_Shoot-Images-007-2-600x900.jpg?resize=550%2C825'
        }
   
      ]);
    });
  }
