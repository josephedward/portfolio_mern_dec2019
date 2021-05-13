import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Toggle from "react-toggle";
import "./index.css";

require("typeface-aleo");
require("typeface-open-sans");

// const [, updateState] = React.useState();
// const forceUpdate = React.useCallback(() => updateState({}), []);

function getRandomColor(){
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
return randomColor
}


class Nav extends Component {


  render() {
    return (
      <Menu style={{ ...navStyle }} stackable>

        <Menu.Item href="/" style={{ ...txtStyle2 }}>
          Joseph Edward, Web Developer{" "}
        </Menu.Item>

        <Menu.Item style={{ ...txtStyle2 }} href="/projects">
          Projects{" "}
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }} href="/terminal">
          Terminal{" "}
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }} href="/contact">
          Contact{" "}
        </Menu.Item>
        <Menu.Item
          className="cybr-btn"
          style={{
            ...txtStyle2,
          }}
          href="/resume"
        >
          Persistent{" "}
          <span aria-hidden className="cybr-btn__glitch">
            Glitch_
          </span>
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }}>
          Invert
          <Toggle
            onClick={() => {
              document.documentElement.classList.toggle("dark-mode");
            }}
          />
        </Menu.Item>
        {/* <Menu.Item style={{ ...txtStyle2 }}>
          <button
            onClick={
              () => {
               document.location.reload()
            }
            }
          >
        Change Colors
          </button>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default Nav;

const navStyle = {
  marginBottom: "0px",
  border: `10px solid black`,
  backgroundColor: `#${getRandomColor()}`,
  width: "100%",
  display: "flex",
  justifyContent: "center",

};

const txtStyle2 = {
  marginBottom: "0px",
  height:"50px",
  fontFamily: "Helvetica",
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor:
  `#${getRandomColor()}`,
  backgroundColor: `#${getRandomColor()}`,
  fontSize: "20px",
  fontWeight: "bold",
  color: "black",
  border: `3px solid #${getRandomColor()}`,
};
