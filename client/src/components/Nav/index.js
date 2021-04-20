import React, { Component } from "react";
import { Menu, Checkbox } from "semantic-ui-react";
import Toggle from "react-toggle";
import "./index.css";

require("typeface-aleo");
require("typeface-open-sans");

class Nav extends Component {
  render() {
    return (
      
      <Menu style={{ ...navStyle }} stackable>
              <Menu.Item style={{ ...txtStyle2 }}>
          Invert
          <Toggle
            onClick={() => {
              document.documentElement.classList.toggle("dark-mode");
            }}
          />
        </Menu.Item>
        <Menu.Item href="/" style={{ ...txtStyle2 }}>
          Joseph Edward, Web Developer
        </Menu.Item>
        {/* <Menu.Item style={{ ...txtStyle2 }} href="/">
          Home{" "}
        </Menu.Item> */}
        <Menu.Item style={{ ...txtStyle2 }} href="/projects">
          Projects{" "}
        </Menu.Item>
        <Menu.Item style={{ ...txtStyle2 }} href="/terminal">
          Terminal{" "}
        </Menu.Item>
        <Menu.Item
          className="cybr-btn"
          style={{
            // backgroundColor: "black",
            // color:"white",
            ...txtStyle2
          //   background:
          //     "linear-gradient(90deg, #f5ed00 80%, #e6de00 80%), #fff700",
          }}
          href="/persistent.html"
        >
          Persistent{" "}
          <span aria-hidden class="cybr-btn__glitch">
            Glitch_
          </span>
          {/* <span aria-hidden class="cybr-btn__tag">
            R25
          </span> */}
        </Menu.Item>

      </Menu>
  
    );
  }
}

export default Nav;

const navStyle = {
  marginBottom: "0px",
  // color: "aqua",
  border: "10px solid aqua",
  // background: "rgba(0,0,0,0)",
  backgroundColor: "black",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // outline:"15px solid orange"
};

const txtStyle2 = {
  fontFamily: "Helvetica",

  "-webkit-text-stroke-width": "1px",
  "-webkit-text-stroke-color": "white",
  backgroundColor: "red",
  fontSize: "20px",
  fontWeight: "bold",
  color: "darkblue",
  border: "5px solid darkblue",
};
