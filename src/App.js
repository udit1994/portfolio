import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import About from "components/About";
import Projects from "components/Projects";
import Layout from "components/Layout";

import companyProj from "content/companyProj";
import hobbyProj from "content/hobbyProj";

function App() {
  return (
    <Router>
      <Layout>
        {({ opacity, setDisplayForm }) => (
          <Switch>
            <Route path="/projects">
              <Projects opacity={opacity} proj={companyProj} />
            </Route>
            <Route path="/hobby-projects">
              <Projects opacity={opacity} proj={hobbyProj} />
            </Route>
            <Route>
              <About opacity={opacity} setDisplayForm={setDisplayForm} />
            </Route>
          </Switch>
        )}
      </Layout>
    </Router>
  );
}

export default App;
