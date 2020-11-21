import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "components/About";
import Journey from "components/Journey";
import Layout from "components/Layout";
import Learning from "components/Learning";

function App() {
  return (
    <Router>
      <Layout>
        {(opacity) => (
          <Switch>
            <Route path="/" exact={true}>
              <About opacity={opacity} />
            </Route>
            <Route path="/journey">
              <Journey opacity={opacity} />
            </Route>
            <Route path="/learning">
              <Learning opacity={opacity} />
            </Route>
          </Switch>
        )}
      </Layout>
    </Router>
  );
}

export default App;
