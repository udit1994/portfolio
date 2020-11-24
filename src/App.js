import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import About from "components/About";
import Journey from "components/Journey";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        {(opacity) => (
          <Switch>
            <Route path="/journey">
              <Journey opacity={opacity} />
            </Route>
            <Route path="/">
              <About opacity={opacity} />
            </Route>
          </Switch>
        )}
      </Layout>
    </Router>
  );
}

export default App;
