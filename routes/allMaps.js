/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');
const dc = require('../lib/favoritesQueries.js');

//----------------------------------------------------------------------------------------------------

router.get("/", (req, res) => {
  const username = req.session.username;
  const user_id = req.session.userId;
  db.getAllMaps()
    .then(allMaps => {

      dc.getFavoritesByUser(user_id)
        .then(allFavs => {

          const final = allMaps.map((map) => {
            let resutlingMap = {...map};
            const foundFavorite = allFavs.find((favorite) => {
              if (map.id === favorite.map_id) {
                return true;
              } else {
                return false;
              }
            });
            resutlingMap.favorited = foundFavorite || null;
            return resutlingMap;
          });

          const templateVars = { gallerymaps: final, user: username};
          res.render("gallerypages", templateVars);

        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});


module.exports = router;


