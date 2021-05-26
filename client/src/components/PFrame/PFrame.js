import React, { ReactDOM, Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { useRef } from "react";
import LogsProvider from "react-use-logs";

export default function PFrame(props) {
  
  function noop() {}
  const savedFunctions = Object.keys(console).reduce((memo, key) => {
    if (typeof console[key] == "function") {
      //keep a copy just in case we need it
      memo[key] = console[key];
      //de-fang any functions
      console[key] = noop;
    }
    return memo;
  }, {});

 function logTest(){
  console.log("Hello?");
  console.info("Hello-o-o-o?");
  console.warn("Can anybody hear me?");
  console.error("I guess there is nobody there...");
  savedFunctions.log("MUAHAHAHA!");
}

  return (

      <ListItem key={props.id}>
        <strong>
          <a href={props.html_url}>{props.name}</a>
        </strong>
        <br />
        <a style={orange} href={props.homepage}>
          {props.homepage}
        </a>
        <p>{props.description}</p>
        {props.homepage ? (
          <iframe
            width="100%"
            height="800"
            title="Deployment Iframe"
            src={props.homepage}
          />
        ) : (
          <div>
            <p>Your browser does not support iframes.</p>
          </div>
        )}
      </ListItem>
  );
}

const wB = {
  background: "white",
};

const orange = {
  color: "orange",
};

const bW = {
  background: "black",
  color: "white",
};
