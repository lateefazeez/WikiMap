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
  return db.query(`SELECT * FROM maps
                    JOIN pins ON pins.map_id = maps.id
                    WHERE user_id = $1; `, [id])
    .then((response) => {

      return response.rows;
    })
    .catch((error) => {
      console.log("unable to query db error:", error);
    });
};



module.exports = {getAllMaps, getMyMaps, getNotMyMaps, getMyFavoriteMaps, getMyContributionMaps};
