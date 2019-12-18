import axios from "axios";



export default {
  // Gets all projects
  getprojects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getproject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteproject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveproject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  getrepos: function(){
    return axios.get("/api/repos/");
  }
};


