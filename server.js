// load .env data into process.env
require("dotenv").config();
let cookieSession = require('cookie-session');

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['user_id']
}));

// Separated Routes for each Resource
const allMapRoutes = require("./routes/allMaps");
const myMapRoutes = require("./routes/myMaps");
const myFavoriteMaps = require("./routes/myFavorites");
const myContributedMaps = require("./routes/myContributions");
const mapsNotOwned = require("./routes/mapsNotOwned");
const currentMap = require("./routes/getMap");

const logoutRoute = require("./routes/logout");
const loginRoute = require("./routes/login");

// Mount all resource routes
app.use("/api/all-maps", allMapRoutes);
app.use("/api/my-maps", myMapRoutes);
app.use("/api/my-favs", myFavoriteMaps);
app.use("/api/my-contributions", myContributedMaps);
app.use("/api/not-owned", mapsNotOwned);
app.use("/api/map", currentMap);

app.use("/api/logout", logoutRoute);
app.use("/api/login", loginRoute);



// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

