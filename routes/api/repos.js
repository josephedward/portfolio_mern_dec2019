const router = require("express").Router();
const ghapi=require("../../GHAPI")


// async 
function getRepos(){
    return ghapi.callGHAPI();
}




router.route('/').get(function(req, res) {
    console.log(req.params.id);
    // getRepos().then(repoData => res.json(repoData));
 
    getRepos().then(repoData => res.json(repoData));
  });

module.exports = router;