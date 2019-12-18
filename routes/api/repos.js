const router = require("express").Router();
const ghapi=require("../../GHAPI")


// async 
function getRepos(){
    return ghapi.callGAPI();
}




router.route('/repos').get(function(req, res) {
    console.log(req.params.id);
    getRepos.then(repoData => res.json(repoData));
  });

module.exports = router;