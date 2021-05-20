import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Terminal_Browser from "./pages/Terminal_Browser";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"

function App() {
  return (
    <Router>
      <div>
        <Nav
        style={{
          height:"5px !important",
          width:"100%"}}
         />
        <Switch>
          <Route exact path="/terminal" component={Terminal_Browser} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/" component={Home}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
