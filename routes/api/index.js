const router = require("express").Router();
const repoRoutes = require("./repos");

// GitHub repos
router.use("/repos", repoRoutes);

module.exports = router;
