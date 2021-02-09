import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "../Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth" exact component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
