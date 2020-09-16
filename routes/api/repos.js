const router = require("express").Router();
const ghapi=require("../../GHAPI")

function getRepos(){
    return ghapi.callGHAPI();
}

router.route('/').get(function(req, res) {
    console.log(req.params.id);
    getRepos().then(repoData => res.json(repoData));
  });

module.exports = router;

