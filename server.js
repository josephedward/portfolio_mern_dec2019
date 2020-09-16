require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8888;

// const gapi = require("./GHAPI.js");
const path = require('path')
require('dotenv').config({ path:"../.env" });
  // path.resolve(__dirname, '../.env') })


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// if (process.env.NODE_ENV !== 'production') {
 
// }

// Add routes, both API and view
app.use(routes);
//libridex uses :
// Add routes, both API and view
app.use("/",routes);

// Connect to the Mongo DB
//added line to avoid deprecation warning
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react_project_list",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server NOW listening on PORT ${PORT}!`);
});
