import React from "react";
import "./style.css";
// import { withRouter } from "react-router-dom";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div style ={wBackground} >
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li  
  // style ={wBackground}
  style={mAlign}
   className="list-group-item">{children}</li>;
}

const wBackground={
  background:"white",
  // marginTop:"50px"
  // height:"100%"
}

const mAlign={
  // background:"grey",
  fontSize:"15px",
  width:"100%",
  margin: "0 auto",
  textAlign:"center",
  // display: "flex",
  // "flex-direction": "row",
  "align-items": "center"

}