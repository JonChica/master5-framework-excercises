import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MembersTableComponent } from "./components";
import { MemberDetailsComponent } from "./components/memberDetails/memberDetails";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/home" exact component={MembersTableComponent} />
      <Route path="/details/:userName" component={MemberDetailsComponent} />
      )} />
      <Redirect to="/home" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
