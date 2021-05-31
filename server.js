const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8888;
require("dotenv").config({ path: "../.env" });

//no logs in prod
if (process.env.NODE_ENV === "production") {
  function noop() {}
  const savedFunctions = Object.keys(console).reduce((memo, key) => {
    if (typeof console[key] == "function") {
      //keep a copy just in case we need it
      memo[key] = console[key];
      //de-fang any functions
      console[key] = noop;
    }
    return memo;
  }, {});

  function logTest() {
    console.log("Hello?");
    console.info("Hello-o-o-o?");
    console.warn("Can anybody hear me?");
    console.error("I guess there is nobody there...");
    savedFunctions.log("MUAHAHAHA!");
  }
}






app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use("/", routes);
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server NOW listening on PORT ${PORT}!`);
});
