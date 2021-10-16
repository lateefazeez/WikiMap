

const { response } = require("express")
const db = require("./lib/db")


const getAllMaps = () => {
  return db.query(`SELECT * FROM maps;`)
    .then ((response) => {
      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}

const getMyMaps = (id) => {
  return db.query(`SELECT * FROM maps WHERE user_id = $1;`, [id])
    .then ((response) => {
      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}

const getNotMyMaps = (id) => {
  return db.query(`SELECT * FROM maps WHERE user_id <> $1;`, [id])
    .then ((response) => {
      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}

const geMyFavoriteMaps = (id) => {
  return db.query(`SELECT * FROM maps
                    JOIN favorites ON favorites.map_id = favorites.id
                    WHERE user_id = $1; `, [id])
    .then ((response) => {
      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}

const geMyContributionMaps = (id) => {
  return db.query(`SELECT * FROM maps
                    JOIN pins ON pins.map_id = pins.id
                    WHERE user_id = $1; `, [id])
    .then ((response) => {
      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}


module.exports = {getAllMaps, getMyMaps, getNotMyMaps, geMyFavoriteMaps, geMyContributionMaps}
