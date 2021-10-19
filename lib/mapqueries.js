const db = require("./db");


const getAllMaps = () => {
  return db.query(`SELECT * FROM maps;`)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getMyMaps = (id) => {
  return db.query(`SELECT * FROM maps WHERE user_id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getNotMyMaps = (id) => {
  return db.query(`SELECT * FROM maps WHERE user_id <> $1;`, [id])
    .then((response) => {

      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getMyFavoriteMaps = (id) => {
  return db.query(`SELECT * FROM maps
                    JOIN favorites ON favorites.map_id = maps.id
                    WHERE favorites.user_id = $1; `, [id])
    .then((response) => {

      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getMyContributionMaps = (id) => {
  return db.query(`SELECT DISTINCT ON (maps.name) maps.* FROM maps
                    JOIN pins ON pins.map_id = maps.id
                    WHERE contributor_id = $1;`, [id])

    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getSingleMap = (map_id) => {
  return db.query(`SELECT * FROM maps WHERE maps.id = $1;`, [map_id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const generateMap = (map) => {
  return db.query(`INSERT INTO maps(name, description, user_id, thumbnail_image, longitude, latitude)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, [map.name, map.description, map.user_id, map.image, map.latitude, map.longitude])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};

const getMapIdByname = (map_name) => {
  return db.query(`SELECT * FROM maps WHERE maps.name = $1;`, [map_name])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};


module.exports = {getMapIdByname, getAllMaps, getMyMaps, getNotMyMaps, getMyFavoriteMaps, getMyContributionMaps, getSingleMap, generateMap};
