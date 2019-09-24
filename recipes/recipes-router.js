const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500);
    });
});//endpoint works

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  Recipes
    .getById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
});//endpoint works


router.post('/', async (req, res) => {
  const recipeData = req.body;

  try {
    const [id] = await Recipes.add(recipeData);
    res.status(201).json({ created: id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new recipe' });
  }
});//endpoint works

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const updatedRecipe = await Recipes.update(id, changes);

    if (updatedRecipe) {
      res.json({ update: updatedRecipe });
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update recipe' });
  }
});//endpoint works

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Recipes.remove(id);

    if (deleted) {
      res.json({ removed: id });
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete recipe' });
  }
});

module.exports = router;