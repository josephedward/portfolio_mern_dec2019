import React, { Component } from "react";
import { Menu, Checkbox } from "semantic-ui-react";
import Toggle from "react-toggle";

require("typeface-aleo");
require("typeface-open-sans");

class Nav extends Component {
  render() {
    return (
      <Menu
        style={{ ...navStyle }}
        stackable
      >
        <Menu.Item
          href="/"
          style={{ ...txtStyle2 }}
        >
          Joseph Edward, Web Developer
        </Menu.Item>
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
        <Menu.Item
          style={{...txtStyle2}}
        >
          Invert
          <Toggle
            onClick={() => {
              document.documentElement.classList.toggle("dark-mode");
            }}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;

const navStyle = {
  marginBottom: "0px",
  color: "black",
  border: "10px solid aqua",
  // background: "rgba(0,0,0,0)",
  backgroundColor:"red",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const txtStyle2 = {
  fontFamily: "Helvetica",
  "-webkit-text-stroke-width": "1px",
  "-webkit-text-stroke-color": "white",
  backgroundColor: "orange",
  fontSize: "20px",
  fontWeight: "bold",
  color: "darkblue",
  border:"5px solid darkblue"
};
