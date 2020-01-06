import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
// import testImage from "./matrix.jpeg";

class Nav extends Component {
  render() {
    // const { activeItem } = this.state

    return (
      <Menu className="navbar navbar-expand-lg navbar-dark bg-danger" 
      // style={navStyle}
      stackable
      >
        <Menu.Item className="navbar-brand" href="/" 
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
        <Menu.Item style={{ ...txtStyle2 }}>
          {
            // href="https://jeffhuang.com/designed_to_last/"
            /* Need the to create plain HTML site */
          }
          Persistent{" "}
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;

const navStyle = {
  //  "background-image": `url('${testImage}')`,

  // "background-color": "red",
  // position:"fixed",
  // width:"100%",
  // zIndex:"10"

    marginBottom:"0px"
};

// const txtStyle = {
//   color: "white",
//   margin: "10px"
// };

const txtStyle2 = {
  color: "black",
  // fontSize: "20px",
  // fontOutline:"red solid 3px",

  // "text-shadow": "black 0px 0px 1px",
  // "-webkit-font-smoothing": "antialiased",
  // border: "3px solid black",
  // fontFamily:"helvetica",
  // margin: "10px",
  // backgroundColor: "white"
};
