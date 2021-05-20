import axios from "axios";



export default {
  // Gets all repos
  getrepos: function(){
    return axios.get("/api/repos");
  }
};


