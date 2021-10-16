const express = require('express');
const router  = express.Router();
let cookieSession = require('cookie-session');

const db = require('../lib/mapqueries.js');

router.use(cookieSession({
  name: 'session',
  keys: ['user_id']
}));

router.get("/", (req, res) => {
  const id = req.params.user_id;
  req.session.userId = id;
  db.getUser(id)
    .then(user => {
      if (user.id === id) {
        res.redirect("/", {username: user.name});
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
