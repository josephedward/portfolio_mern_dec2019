import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
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
        <Nav />
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


          // {/* Did it even do anything?  */}
          // {/* <Route exact path="/" component={projects} /> */}
          // {/* <Route exact path="https://josephedward.github.io/portfolio-site/" /> */}
          // {/* <Route exact path="/jq_portfolio" component={jQ_Portfolio}/> */}
