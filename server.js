require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8888;
require('dotenv').config({ path:"../.env" });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/",routes);


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server NOW listening on PORT ${PORT}!`);
});
