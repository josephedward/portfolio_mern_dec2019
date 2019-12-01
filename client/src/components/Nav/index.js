import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Joseph Edward's Porfolio
      </a>

 
      <a style={{color:"white",margin:"5px"}} href="/projects">Projects </a>
      
      <a style={{color:"white",margin:"5px"}} href="/terminal">Terminal </a>
    </nav>
  );
}

export default Nav;
