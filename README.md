# Chef Portfolio

As a food blogger, I want to be able to show off my work and recipes. I have a lot of amazing pics from the recipes i’ve created I'd like to share with potential clients, but I need a site that is more professional than Instagram in order to do so. I don’t have time or skills to build my own unique website, I need a site that provides templates so I can just input some information and be done.

The Application is live [here](https://chefportfolio-stacy.herokuapp.com/)

## Installation

### Clone this repository and navigate into it

`git clone https://github.com/chef-portfolio/Back-End.git && cd Back-End`

### Install dependencies

`npm install`

#### Add Neccessary Environment Variables

 Edit the .env.sample file to add:

- A jsonwebtoken secret to encrypt jsonwebtoken

- Port number where the server can listen on

- Database Url for postgres (under construction)

After that rename the file to `.env`

#### Start the application

`npm run server`

---

## Documentation

This application is deployed on [heroku](https://chefportfolio-stacy.herokuapp.com/) with the following endpoints accessible

|Method|Functionality|Endpoint|
|-|-|-|
|POST _/api/auth/register_|Create a user account|`api/auth/register`|
|POST _/api/auth/login_|Login a user|`api/auth/login`          |
|POST _/recipes_|Create a new recipe |`api/recipes`| 
|GET _/recipes_|Get all recipes entries|`api/recipes`|
|GET _/recipe/:id_|Get recipes by a chef's ID|`api/chefs/:id/recipes`|
|PUT _/recipe/:id_|Update a recipe by ID|`api/chefs/recipes/:id`|
|DELETE _/recipe/:id_|Delete a recipe by ID|`api/chefs/recipes/:id`|

### Request and Response Specifications

#### POST _api/auth/register_

**Request spec:**

```javascript
{
    first_name: ('required') 'accepts letters from 2 -50 chars',
    last_name: ('required')'accepts letters from 2 -50 chars',
    username: ('required')'accepts numbers, letters from 2 -25 chars',
    location: 'accepts letters from 2 -50 chars',
    contact: ('required')'example@email.com',
    password: ('required')'accepts any string from 6-32 chars',
    avatar_url: 'accepts any string from 6-32 chars',
}
```

**Response spec:**

```javascript
{
    "user": {
        "id": 5,
        "contact": "example@gmail.com",
        "first_name": "John",
        "last_name": "Doe",
        "username": "JohnDoe5"
    },
}

```
#### POST _/auth/login_

```javascript
{
  username: 'JohnDoe5',
  password: 'accepts any string from 6-32 chars'
}
```

**Response spec:**

```javascript
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cC548kpXVCJ9.hgjgkgooopooooopoKNHIOKKLOHjjoooooooo._7_DcsvIG6XlqRtmoqX3NmWnkREkFfkqswtmkCo1O2M",
    "user": {
        "id": 5,
        "email": "example@gmail.com",
        "first_name": "John",
        "last_name": "Doe"
    }
}
```

#### POST _/recipes_

**Request spec:**

```javascript
{
  title: 'Name of the recipe',
  description: 'Description of recipe, typically brief',
  instructions: 'How to make the recipe',
  meal_type: 'Will record breakfast, lunch, dessert, snack, dinner',
  chef_id: 'Identify which chef this belongs to',
  pic_url: 'Picture of the recipe (img url)',
}
```

**Response spec:**

```javascript
{
    "recipe": {
        "title": "Example Dish",
        "description": "Louisiana Sweet Pickles",
        "instructions": "Place pickles in jar with ...",
        "meal_type": "Breakfast",
        "chef_id": 2,
        "pic_url": null
    }
}
```
#### PUT _/recipes_/2

**Request spec:**

```javascript
{
    title: "Tofu Tacos Updated",
    description: "This recipe is quick and easy..",
    instructions: "In a large skillet over medium heat, combine.." ,
    meal_type: "dinner",
    chef_id: 1,
    pic_url: ""
  }
```

**Response spec:**

```javascript
{
    "recipe": {
        "title": "Tofu Tacos Updated",
    "description": "This recipe is quick and easy...",
    "instructions": "In a large skillet over medium heat, combine..",
    "meal_type": "dinner",
    "chef_id": 1,
    "pic_url": ""
    }
}
```

#### GET _/recipes_

**Request spec:** Return all recipes(feed)

**Responce spec:**

```javascript
[
  {
    "title": "Hot Ham and Cheese Sandwiches",
    "description": "Do not settle for ordinary ham and cheese sandwiches...",
    "instructions": "Preheat oven to 250 degrees F (120 degrees C)...",
    "meal_type": "lunch",
    "pic_url": ""
  },
  {
    "title": "Old Fashioned Pancakes",
    "description": "This is a great recipe...",
    "instructions": "In a large bowl, sift together...",
    "meal_type": "breakfast",
    "pic_url": ""
  },
  {
    "title": "Gouda and Spinach Stuffed Pork Chops",
    "description": "This turned out absolutely delicious!!",
    "instructions": "Preheat the oven to 400 degrees...",
    "meal_type": "dinner",
    "pic_url": ""
  },
}]
```

#### GET _/recipes/5_

**Request spec:** Request a recipe by the :id.

**Responce spec:**

```javascript
{
    "recipe": {
    "title": "Chicken Tacos",
    "description": "This recipe is quick and easy...",
    "instructions": "In a large skillet over medium heat...",
    "meal_type": "dinner",
    "chef_id": 1,
    "pic_url": ""
  }
}
```

#### DELETE _/recipes/5_

**Request spec:** The request specification for the `DELETE` requests is just the url.

**Responce spec:**

```javascript
{
  message: 'Recipe removed successfully'
}
```
