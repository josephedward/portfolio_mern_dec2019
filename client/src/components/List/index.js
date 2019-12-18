import React from "react";
import "./style.css";
import { withRouter } from "react-router-dom";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div style ={wBackground} className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li  style ={wBackground} className="list-group-item">{children}</li>;
}

const wBackground={
  background:"white"
}