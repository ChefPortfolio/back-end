const express = require('express');

const Chefs = require('./chefs-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Chefs
    .getChefs()
    .then(chefs => {
      res.status(200).json(chefs);
    })
    .catch(error => {
      res.status(500);
    });
});//endpoint works

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  Chefs
    .getById(id)
    .then(chef => {
      if (chef) {
        res.json(chef);
      } else {
        res.status(404).json({ message: 'Could not find chef with given id.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get chef' });
    });
});//endpoint works

router.get('/:id/recipes', (req, res) => {
  const { id } = req.params;

  Chefs
    .getChefRecipes(id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ message: 'error getting the recipes' });
    });
});//Tweak

router.post('/', async (req, res) => {
  const chefData = req.body;

  try {
    const [id] = await Chefs.add(chefData);
    res.status(201).json({ created: id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new chef' });
  }
});//endpoint works

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const updatedChef = await Chefs.update(id, changes);

    if (updatedChef) {
      res.json({ update: updatedChef });
    } else {
      res.status(404).json({ message: 'Could not find chef with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update chef' });
  }
});//endpoint works

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Chefs.remove(id);

    if (deleted) {
      res.json({ removed: id });
    } else {
      res.status(404).json({ message: 'Could not find chef with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete chef' });
  }
});//endpoint works

module.exports = router;