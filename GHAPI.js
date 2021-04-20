require('dotenv').config()
const GitHubClient = require('./js_github_quickstart/libs/GitHubClient.js').GitHubClient;
const users = require('./js_github_quickstart/libs/features/users');
const octocat = require('./js_github_quickstart/libs/features/octocat');
const repos = require('./js_github_quickstart/libs/features/repositories');


const ghClient = new GitHubClient({
    baseUri:"https://api.github.com",
    token: process.env.TOKEN_GITHUB_DOT_COM
  },users, repos, octocat);


  async function getMe(){
      let myName=ghClient.fetchUser({handle:'josephedward'})
    .then(response =>{
        return response;
    })
    .catch(console.error);
    return myName;
  }

  async function getMyRepos(){
    let myRepos=ghClient.fetchUserRepositories({handle:'josephedward'})
    .then(response =>{
        return response;
    })
    .catch(console.error);
    return myRepos;
  }

let mRs="";
async function callGHAPI(){
    mRs= await getMyRepos();
// console.log(mRs);
return mRs;
}

callGHAPI().then((res)=>{
   //useful for debugging 
  // console.log(res)
});

module.exports= {callGHAPI};


