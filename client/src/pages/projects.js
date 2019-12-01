import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class projects extends Component {
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
    API.getprojects()
      .then(res =>
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What projects Should I Read?</h1>
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
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>projects On My List</h1>
            </Jumbotron>
            {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project._id}>
                    <Link to={"/projects/" + project._id}>
                      <strong>
                        {project.title} by {project.contributors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteproject(project._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default projects;
