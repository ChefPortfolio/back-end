const router = require('express').Router();
const bcrypt = require('bcryptjs');
const restrict = require('./restricted-middleware')
const Users = require('./auth-model.js');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

function generateToken(user) {
  const payload = {
    username: user.username,
    id: user.id,
  };
  const options = {
    expiresIn: '55d',
  };
  return jwt.sign(payload, secrets.jwtSecret, options)
}; 

// for /refresh

router.get('/refresh', restrict, (req,res) => {
  Users.findBy(req.user.username)
  .then(user => {
      const token = generateToken(user);
      res.status(200).json({ token })
  });
}); //endpoint not tested

// for endpoints beginning with /api/auth

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
}); //endpoint works

router.post('/login', (req, res) => {
    let { username, password } = req.body;
        console.log({username, password})
    Users.findBy({username})
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          res.status(200).json({ message: `Welcome ${user.username}!`,token });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json(error);
      });
  });//endpoint works

  // Retrieve Users

  router.get('/', restrict, (req, res) => {
    Users.get()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting Users"});
    });

  });// endpoint works



module.exports = router;