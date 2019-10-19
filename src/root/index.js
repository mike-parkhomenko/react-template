import React from "react";
import { connect } from "react-redux";
import App from "containers/App";
import Routes from "routes/router";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

function Root() {
  return (
    <Router history={createBrowserHistory()}>
      <App>
        <Routes />
      </App>
    </Router>
  );
}

export default connect()(Root);
