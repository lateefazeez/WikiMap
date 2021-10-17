

const { response } = require("express");
const db = require("./db");

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE users.id = $1;`, [id])
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

module.exports = {getUserById};
