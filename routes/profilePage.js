/*
 * This would be routes for user profile info
 */

const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const db = require("../lib/userqueries.js");

router.get("/", (req, res) => {
  const user_id = req.session.userId;
  const idUser = req.session.username;
  db.getUserById(user_id)
    .then((userInfo) => {

      db.getUserContributionMaps(user_id)
        .then((contribInfo) => {

          db.getUserFavoriteMaps(user_id)
            .then((favInfo) => {

              const templateVars = {
                userInfo: userInfo,
                favs: favInfo,
                contribs: contribInfo,
                user: idUser,
              };

              res.render("user-profile", templateVars);
            });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
