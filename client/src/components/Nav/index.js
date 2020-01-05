import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
// import testImage from "./matrix.jpeg";

class Nav extends Component {
  render() {
    // const { activeItem } = this.state

    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
        <a className="navbar-brand" href="/" style={txtStyle2}>
          Joseph Edward, Web Developer/Vampire Hunter
        </a>

        <hr />
        <a style={{ ...txtStyle }} href="/">
          Home{" "}
        </a>
        <a style={{ ...txtStyle }} href="/projects">
          Projects{" "}
        </a>
        <a style={{ ...txtStyle }} href="/terminal">
          Terminal{" "}
        </a>
        <a style={{ ...txtStyle }}>
          {
            // href="https://jeffhuang.com/designed_to_last/"
            /* Need the to create plain HTML site */
          }
          Persistent{" "}
        </a>
      </nav>
    );
  }
}

export default Nav;

const navStyle = {
  //  "background-image": `url('${testImage}')`,

  "background-color": "red",
  position:"fixed",
  width:"100%",
  zIndex:"10"

};

const txtStyle = {
  color: "white",
  margin: "10px"
};

const txtStyle2 = {
  color: "black",
  fontSize: "20px",
  margin: "10px",
  // backgroundColor: "white"
};
