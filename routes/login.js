const express = require('express');
const router  = express.Router();
const db = require('../lib/userQueries');

// const generateUserId = () => {
//   return Math.round(Math.random() * 5);
// };

// const signinId = generateUserId();
router.get("/:id", (req, res) => {
  const id = req.params.id;
  req.session.userId = id;

  db.getUserById(id)
    .then(user => {
      req.session.username = user[0].name;
      res.redirect("/user/profile");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

console.log('hi');
module.exports = router;


