// load .env data into process.env
require("dotenv").config();
let cookieSession = require('cookie-session');

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  keys: ['user_id', 'username']
}));

// Separated Routes for each Resource
const allMapRoutes = require("./routes/allMaps");
const myMapRoutes = require("./routes/myMaps");
const myFavoriteMaps = require("./routes/myFavorites");
const myContributedMaps = require("./routes/myContributions");
const mapsNotOwned = require("./routes/mapsNotOwned");
const currentMap = require("./routes/getMap");
const createMapRouter = require("./routes/createMap");
const savePin = require("./routes/savePins");

const logoutRoute = require("./routes/logout");
const loginRoute = require("./routes/login");

const profileRoute = require("./routes/profilePage");
const pinCollection = require("./routes/JSONgetPins");
const updatePinById = require("./routes/updatePin");
const deletePinById = require("./routes/deletePin");

// Mount all resource routes
app.use("/", allMapRoutes);
app.use("/user/maps", myMapRoutes);
app.use("/user/favorites", myFavoriteMaps);
app.use("/user/contributions", myContributedMaps);
app.use("/user/not", mapsNotOwned);
app.use("/maps", currentMap);
app.use("/maps", createMapRouter);
app.use("/api/create-map", createMapRouter);
app.use("/map/pins", savePin);
app.use("/map/pin/update", updatePinById);
app.use("/map/pin/delete", deletePinById);

app.use("/api/maps", pinCollection);

app.use("/logout", logoutRoute);
app.use("/login", loginRoute);

app.use("/user/profile", profileRoute);

//app.use("/maps", pinCollection);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  const username = req.session.username;
  const id = req.session.signinId;
  res.render("gallerypages", {user: username, signinId: id});
});

// app.get("/test", (req, res) =>{
//   return res.json({names: "matt"})
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


