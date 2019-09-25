require('dotenv').config();

const server = require("./api/server.js");
const defaults = require('./config/defaults.js');


server.listen(defaults.port, () => {
  console.log(`Listening on port ${defaults.port}...`);
});