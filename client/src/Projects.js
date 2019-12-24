import React, { Component } from "react";
// import DeleteBtn from "./components/DeleteBtn";
// import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./components/Grid";
import { List, ListItem } from "./components/List";
import { Input, TextArea, FormBtn } from "./components/Form";
import Axios from "axios";
// import caller from "../../../gAPI";
// import {List} from "semantic-ui-react";

class Projects extends Component {
  state = {
    projects: [],
    title: "",
    contributors: "",
    description: ""
  };

  componentDidMount() {
    this.loadprojects();
  }

  loadprojects = () => {
    API.getrepos()
      .then(res =>
        // console.log(res.data),
        this.setState({
          projects: res.data,
          title: "",
          contributors: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteproject = id => {
    API.deleteproject(id)
      .then(res => this.loadprojects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.contributors) {
      API.saveproject({
        title: this.state.title,
        contributors: this.state.contributors,
        description: this.state.description
      })
        .then(res => this.loadprojects())
        .catch(err => console.log(err));
    }
  };

  loadProjectURL(e, url) {
    // e.preventDefault();
    window.location.replace(url);
  }


   requestOptions = {
    method: 'GET',
    headers: {
        'User-Agent':"PostmanRuntime/7.21.0",
        Accept:"*/*",
        'Cache-Control':"no-cache",
        "Postman-Token":"9d4b0799-97d2-4f8b-945c-e31f72b4361e",
        // Host:"randomwordgenerator.com",
        'Accept-Encoding':"gzip, deflate",
        Connection:"keep-alive",
        "Access-Control-Allow-Origin": true
      },
    redirect: 'follow'
  };
  
  
  render() {
    return (
      <div
      //  style={{"background-color":"black"}}
      >
        <Container fluid>
          <Row>
            {/* <Col size="md-6">
            <Jumbotron>
              <h1>Suggest a Project to Work On?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.contributors}
                onChange={this.handleInputChange}
                name="contributors"
                placeholder="contributors (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.contributors && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit project
              </FormBtn>
            </form>
          </Col> */}
            <Col size="md">
              {/* <Jumbotron> */}
              <h1 style={wB}>My Projects: </h1>
              {/* </Jumbotron> */}
              {this.state.projects.length ? (
                <List>
                  {this.state.projects.map(project => (
                    <ListItem key={project.id}>
                      {/* <a href={project.html_url}> */}

                      {/* <Link 
                    // href={project.html_url}  
                    to={project.html_url}
                     onClick={() => this.loadProjectURL(this.target.event, project.html_url)}
                    // {project.html_url}
                    // {"/projects/" + project.name}
                    
                    > */}
                      <strong>
                        <a href={project.html_url}>{project.name}</a>
                        {/* by {project.contributors} */}
                      </strong>
                      <p>{project.description}</p>
                      {project.homepage? (
                        <iframe
                          width="800"
                          height="500"
                          title="Deployment Iframe"
                          src={project.homepage}
                        /> ):(<div></div>
                       
                      )}

                      {/* </Link> */}
                      {/* </a> */}
                      {/* <DeleteBtn
                        onClick={() => this.deleteproject(project._id)}
                      /> */}
                    </ListItem>
                  ))}
                </List>
              ) : (
                //something is coming back from projects, or it would be displaying this
                <h3 style={wB}>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const wB = {
  background: "white"
};

const center={
  textAlign: "center",
  float: "center",
  margin: "auto",
}


export default Projects;
