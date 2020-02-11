import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Nav extends Component {
  render() {

    return (
      <Menu className="navbar navbar-expand-lg navbar-dark bg-danger" 
      style={navStyle}
      stackable
      >
        <Menu.Item 
        className="navbar-brand" href="/" 
        style={txtStyle2}
        >
          Joseph Edward, Web Developer
        </Menu.Item>

        <hr />
        <Menu.Item style={{ ...txtStyle2 }} href="/">
          Home{" "}
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }} href="/projects">
          Projects{" "}
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }} href="/terminal">
          Terminal{" "}
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }} href="/persistent.html">
          Persistent{" "}
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;

const navStyle = {
    marginBottom:"0px",
    color: "white"
};


const txtStyle2 = {
  color: "white",
};
