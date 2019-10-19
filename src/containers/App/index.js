import React, { useEffect } from "react";
import { connect } from "react-redux";
import { testFetch } from "modules/app/actions";

function App(props) {
  useEffect(() => {
    props.testFetch();
  });

  return <div>App</div>;
}

export default connect(
  null,
  { testFetch }
)(App);
