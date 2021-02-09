import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import useAuthState from "../hooks/useAuthState";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth" exact component={LoginPage} />
          <Route path="/" exact component={HomePage} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
