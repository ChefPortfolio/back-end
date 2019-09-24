# Chef Portfolio

As a food blogger, I want to be able to show off my work and recipes. I have a lot of amazing pics from the recipes i’ve created I'd like to share with potential clients, but I need a site that is more professional than Instagram in order to do so. I don’t have time or skills to build my own unique website, I need a site that provides templates so I can just input some information and be done.

THe Application is live [here](https://lambda.herokuapp.com/)

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

This application is deployed on [heroku](https://lambdacooks.herokuapp.com/) with the following endpoints accessible

|Method|Functionality|Endpoint|
|-|-|-|
|POST _/api/auth/register_|Create a user account|`api/auth/register`|
|POST _/api/auth/login_|Login a user|`api/auth/login`          |
|POST _/recipes_|Create a new recipe (under construction)|`api/chefs/recipes`| 
|GET _/recipes_|Get all recipes entries (under construction|`api/chefs/recipes`|
|GET _/recipe/:id_|Get one recipe entry by ID (under construction)|`api/chefs/recipes/:id`|
|PUT _/recipe/:id_|Update a recipe by ID (under construction)|`api/chefs/recipes/:id`|
|DELETE _/recipe/:id_|Delete a recipe by ID (under construction)|`api/chefs/recipes/:id`|

### Request and Response Specifications

#### POST _api/auth/register_

**Request spec:**

```javascript
{
    first_name: 'accepts letters from 2 -50 chars',
    last_name: 'accepts letters from 2 -50 chars',
    username: 'accepts numbers, letters from 2 -25 chars',
    location: 'accepts letters from 2 -50 chars',
    contact: 'example@email.com',
    password: 'accepts any string from 6-32 chars',
    avatar_url: 'accepts any string from 6-32 chars',
}
```

**Response spec:**

```javascript
{
    "user": {
        "id": 5,
        "contact": "example@gmail.com",
        "first_name": "Name",
        "last_name": "Example",
        "is_chef": false || true
    },
    "token": "yuyujhjiiGHJIKKHJhHJhKhnbGHj.eyJ1c2VySWQiOjUsImlzX2FkbWluIjpmYWxzZSwiaWF0IjoxNTY0NDk1OTg4LCJleHAiOjE1NjUxMDA3ODh9.SgCpomiiiioidhjdfI"
}
```