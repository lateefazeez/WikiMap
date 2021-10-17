const express = require('express');
const router  = express.Router();


router.get("/", (req, res) => {
  const id = req.params.user_id;
  req.session.userId = id;
  res.redirect("/");
  // db.getUser(id)
  //   .then(user => {
  //     if (user.id === id) {
  //       res.redirect("/", {username: user.name});
  //     }
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
  console.log("ID :", id);
  console.log("FROM LOGIN: ", req.session.userId);
});
module.exports = router;

