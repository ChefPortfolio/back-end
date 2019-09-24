const express = require("express");
const helmet = require("helmet");
const cors = require('cors');
const session = require('express-session')

const server = express();

const sessionConfig = {
    
  name: 'BuildWeek', //sid
    secret: process.env.SESSION_SECRET || ' keep it secret, keep it safe',
    cookie: {
      maxAge: 1000 * 60 * 60 , // in milliseconds
      secure: false, //true means only send cookie over https
      httpOnly: true, //true means JS has no access to the cookie
    },
    resave: false,
    saveUninitialized: false, //GDPR laws against setting cookies automatically 
  };

const authRouter = require('../auth/auth-router.js');
const chefsRouter = require('../chefs/chefs-router.js');
// const recipesRouter = require('../recipes/recipes-router.js');


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));


server.use('/api/auth/', authRouter);
server.use('/api/chefs', chefsRouter);
// server.use('/api/recipes', recipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Chef's portfolio server is up and running!!" });
});

module.exports = server;