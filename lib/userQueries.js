

const { response } = require("express");
const db = require("./db");

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE users.id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getUserContributionMaps = (id) => {
  return db.query(`SELECT DISTINCT ON (maps.name) maps.name, maps.id FROM maps
                    JOIN pins ON pins.map_id = maps.id
                    WHERE contributor_id = $1;`, [id])

    .then((response) => {

      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getUserFavoriteMaps = (id) => {
  return db.query(`SELECT DISTINCT ON (maps.name) maps.name, maps.id FROM maps
                    JOIN favorites ON favorites.map_id = maps.id
                    WHERE favorites.user_id = $1;`, [id])

    .then((response) => {

      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

module.exports = {getUserById, getUserContributionMaps, getUserFavoriteMaps};
