/*
 * This would be routes for the maps not owned by thw current user
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');
const dc = require('../lib/favoritesQueries.js');

router.get("/", (req, res) => {
  const user_id = req.session.userId;
  const username = req.session.username;
  db.getNotMyMaps(user_id)
    .then(notMyMaps=> {

      dc.getFavoritesByUser(user_id)
        .then(favorites => {

          const final = notMyMaps.map((map) => {
            let resutlingMap = {...map};
            const foundFavorite = favorites.find((favorite) => {
              if (map.id === favorite.map_id) {
                return true;
              } else {
                return false;
              }
            });
            resutlingMap.favorited = foundFavorite || null;
            return resutlingMap;
          });

          const templateVars = { gallerymaps: final, user: username };
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
