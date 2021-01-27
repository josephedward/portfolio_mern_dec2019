import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Terminal_Browser from "./pages/Terminal_Browser";
// import jQ_Portfolio from "./pages/jQ_Portfolio";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Nav
        style={{width:"100%"}}
         />
        <Switch>
          <Route exact path="/terminal" component={Terminal_Browser} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


