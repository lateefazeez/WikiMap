
const { response } = require("express");
const db = require("./db");
const { getMyMaps } = require("./mapQueries");

//----------------------------------------------------------------------------------------------------

const getPinsByMap = (map_id) => {
  return db.query(`SELECT * FROM pins
                    WHERE map_id = $1;`, [map_id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

//----------------------------------------------------------------------------------------------------

const getPinsByUser = (id) => {
  return db.query(`SELECT * FROM maps
                        JOIN pins ON pins.map_id = maps.id
                        WHERE contributor_id = $1;`, [id])

    .then((response) => {

      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

//----------------------------------------------------------------------------------------------------

const generatePin = (pin) => {
  return db.query(`INSERT INTO pins(contributor_id, map_id, title, description, thumbnail_image, longitude, latitude, layer_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`, [pin.contributor_id, pin.map_id, pin.title, pin.description, pin.thumbnail_image, pin.longitude, pin.latitude, pin.layer_id])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

//----------------------------------------------------------------------------------------------------

const updatePinById = (pin) => {
  return db.query(`UPDATE pins SET title = $2
                    WHERE id = $1
                    RETURNING *;`, [pin.pin_id, pin.new_title])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

//----------------------------------------------------------------------------------------------------

const deletePinById = (pin) => {
  return db.query(`DELETE FROM pins
                    WHERE id = $1
                    RETURNING *;`, [pin.pin_id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

module.exports = {getPinsByMap, getPinsByUser, generatePin, updatePinById, deletePinById};
