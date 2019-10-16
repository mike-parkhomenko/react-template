import React from "react";
import { Switch, Route } from "react-router-dom";
import appConstants from "config/appConstants";
import catalog from "config/catalog";

export default function Routes() {
  return (
    <Switch>
      <Route path={appConstants.routes.index} component={catalog("App")} />
    </Switch>
  );
}
