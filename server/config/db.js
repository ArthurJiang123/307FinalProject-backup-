
// imports the Pool class from the pg module.
// Pools manage multiple client connections
const { Pool } = require('pg');

// a new instance of Pool is created with a configuration object. 
// This object includes the details required to connect to  PostgreSQL database,
// such as the username, password, database name, host, and port.
const pool = new Pool({
  user: 'yourUsername',
  host: 'localhost',
  database: 'yourDatabase',
  password: 'yourPassword',
  port: 5432,
});

// make it available to other files in the Node.js applicaiton.
// So we can use it to query databse from other parts of the applicaiton
module.exports = pool;