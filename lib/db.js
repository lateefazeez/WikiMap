

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

    // host: 'localhost',
    // user: 'matthewfreeman',
    // password: 'labber',
    // database: 'midterm',
    // port: 5432

  };
}

// PG database client/connection setup
const { Pool } = require("pg");
const db = new Pool(dbParams);
db.connect(() =>{
  console.log(`db is connected via port: ${dbParams['port']}`)
});


module.exports = db;
