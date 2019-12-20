import React, { Component } from "react";
import DeleteBtn from "./components/DeleteBtn";
import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./components/Grid";
import { List, ListItem } from "./components/List";
import { Input, TextArea, FormBtn } from "./components/Form";
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
      .then((res) =>
        // console.log(res.data),
        this.setState({ projects: res.data, title: "", contributors: "", description: "" })
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


  loadProjectURL(e,url){
    // e.preventDefault();
    window.location.replace(url)
  }

  render() {
    return (
      <div
      //  style={{"background-color":"black"}}
      >
      <Container fluid >
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
          <Col  size="md-6 sm-12">
            {/* <Jumbotron> */}
              <h1 style={wB}>My Projects: </h1>
            {/* </Jumbotron> */}
            {this.state.projects.length ? (
              <List >
                {this.state.projects.map(project => (
                  <ListItem  key={project._id}>
                  {/* <a href={project.html_url}> */}

                    {/* <Link 
                    // href={project.html_url}  
                    to={project.html_url}
                     onClick={() => this.loadProjectURL(this.target.event, project.html_url)}
                    // {project.html_url}
                    // {"/projects/" + project.name}
                    
                    > */}
                      <strong>
                        <a href={project.html_url}>
                        {project.name}
                         </a>
                         {/* by {project.contributors} */}
                      </strong>
                    {/* </Link> */}
                    {/* </a> */}
                    <DeleteBtn onClick={() => this.deleteproject(project._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              //something is coming back from projects, or it would be displaying this
              <h3 style={wB} >No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

const wB={
  background:"white"
}

export default Projects;
