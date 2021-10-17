


const { response } = require("express")
const db = require("./db")
const { getMyMaps } = require("./mapQueries")

const getPinsByMap= (map_id) => {
  return db.query(`SELECT * FROM pins
                    JOIN maps ON pins.map_id = maps.id
                    WHERE map_id = $1;`, [map_id])
    .then ((response) => {

      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}

const getPinsByUser= (id) => {
  return db.query(`SELECT DISTINCT maps.name FROM maps
                        JOIN pins ON pins.map_id = maps.id
                        WHERE contributor_id = $1;`, [id])

    .then ((response) => {

      return response.rows;
    })
    .catch ((error) => {
      console.log("unable to query db error:", error);
    })
}

module.exports = {getPinsByMap, getPinsByUser}
