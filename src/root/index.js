import React from "react";
import { connect } from "react-redux";
import App from "containers/App";
import Routes from "routes/router";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

function Root() {
  return (
    <Router history={history}>
      <App>
        <Routes />
      </App>
    </Router>
  );
}

export default connect()(Root);
