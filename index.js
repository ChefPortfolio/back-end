require('dotenv').config();

const server = require("./api/server.js");
const defaults = require('./config/defaults.js');


const PORT = process.env.PORT || 4000;

server.listen(defaults.port, () => {
  console.log(`Listening on port ${defaults.port}...`);
});