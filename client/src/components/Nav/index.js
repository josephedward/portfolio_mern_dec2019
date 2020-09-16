import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

require("typeface-aleo")
require("typeface-open-sans")

class Nav extends Component {
  render() {

    return (
      <Menu 
      // className="navbar navbar-expand-lg navbar-dark bg-danger" 
      style={{...navStyle}}
      stackable
      >
        <Menu.Item 
        // className="navbar-brand" 
        href="/" 
        style={{...txtStyle2}}
        >
          Joseph Edward, Web Developer
        </Menu.Item>

        {/* <hr /> */}
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
    color: "black",
    border:"5px solid purple",
    outline:"5px solid blue",
    // backgroundColor:"black",
    background: "rgba(0,0,0,0)",
    width:"100%",
    display:"flex",
    justifyContent:"center"
};


const txtStyle2 = {
  fontFamily: "Helvetica",
  "-webkit-text-stroke-width": "1px",
  "-webkit-text-stroke-color": "black",
  backgroundColor:"aqua",
  fontSize: "25px",
  fontWeight:"bold",
  color:"orange",
  // "margin-left":"25px",
  paddingLeft:"75px",
  paddingRight:"75px"

  // width:"100%"
  // color: "white",
  // border:"1px solid silver"
  
};
