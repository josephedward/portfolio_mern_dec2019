import React, { Component } from "react";
import API from "./utils/API";
import { Col, Row, Container } from "./components/Grid";
import { List, ListItem } from "./components/List";
import { Responsive, Segment } from "semantic-ui-react";

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
    window.location.replace(url);
  }

  requestOptions = {
    method: "GET",
    headers: {
      "User-Agent": "PostmanRuntime/7.21.0",
      Accept: "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "9d4b0799-97d2-4f8b-945c-e31f72b4361e",
      "Accept-Encoding": "gzip, deflate",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": true
    },
    redirect: "follow"
  };

  render() {

    return (
      
      <div>
        <Container fluid>
          <Row>
            <Col size="md">
              <h1 style={{ ...wB }}>My Projects: </h1>
              <h3 style={bW}>
                Visit deployment URL and disable mixed-content blocking for full
                functionality.
              </h3>
              {this.state.projects.length ? (
                <List>
                  {this.state.projects.map(project => (
                    <ListItem key={project.id}>
                      <strong>
                        <a href={project.html_url}>{project.name}</a>
                      </strong>
                      <br />
                      <a style={orange} href={project.homepage}>
                        {project.homepage}
                      </a>
                      <p>{project.description}</p>
                      {project.homepage ? (
                        <iframe
                          width="100%"
                          height="800"
                          title="Deployment Iframe"
                          src={project.homepage}
                        />
                      ) : (
                        <div></div>
                      )}
                    </ListItem>
                  ))}
                </List>
              ) : (
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

const orange = {
  color: "orange"
};

const bW = {
  background: "black",
  color: "white"
};

export default Projects;
