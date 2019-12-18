const router = require("express").Router();
const projectRoutes = require("./projects");
const repoRoutes = require("./repos");

// project routes
router.use("/projects", projectRoutes);
router.use("/repos", repoRoutes);


module.exports = router;
