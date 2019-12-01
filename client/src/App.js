import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from "./pages/projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Terminal_Browser from "./pages/Terminal_Browser";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={projects} />
          {/* route for main */}
          {/* router terminal_in_browser page */}
          <Route exact path="/terminal" component={Terminal_Browser}/>
          <Route exact path="/projects" component={projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
