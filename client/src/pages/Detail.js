import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    project: {}
  };
  // When this component mounts, grab the project with the _id of this.props.match.params.id
  // e.g. localhost:3000/projects/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getproject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid
       style={{height:"1000px"}}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.project.name} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>description</h1>
              <p>
                {this.state.project.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to contributorss</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
