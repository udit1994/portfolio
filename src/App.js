import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import About from "components/About";
import Canvas from "components/Canvas";
import workProj from "content/workProj";
import hobbyProj from "content/hobbyProj";
import Layout from "components/Layout";
import Projects from "components/Projects";

function App() {
  return (
    <Router>
      <Canvas />
      <Layout>
        {({ opacity, setDisplayEmail }) => (
          <Switch>
            <Route path="/work-projects">
              <Projects opacity={opacity} proj={workProj} />
            </Route>
            <Route path="/hobby-projects">
              <Projects opacity={opacity} proj={hobbyProj} />
            </Route>
            <Route>
              <About opacity={opacity} setDisplayForm={setDisplayEmail} />
            </Route>
          </Switch>
        )}
      </Layout>
    </Router>
  );
}

export default App;
