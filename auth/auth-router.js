const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./auth-model.js');

// for endpoints beginning with /api/auth

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
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
          req.session.user = user;
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });//endpoint works

module.exports = router;