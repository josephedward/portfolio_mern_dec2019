import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="/">
        Joseph Edward's Porfolio
      </a>


    <hr/>
      <a style={{color:"black",margin:"10px"}} href="/projects">Projects </a>
      <a style={{color:"black",margin:"10px"}} href="/terminal">Terminal </a>
      <a style={{color:"black",margin:"10px"}} href="https://josephedward.github.io/portfolio-site/">jQuery 'Concept' Portfolio<span role="img" aria-label="smile emoji"> 😁 </span></a>
    </nav>
  );
}

export default Nav;
