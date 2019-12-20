const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

//need to put in if for production - same one thats in server
if (process.env.NODE_ENV === "production") {
// If no API routes are hit, send the React app
  router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
  // app.use(express.static("client/build"));
}

module.exports = router;
