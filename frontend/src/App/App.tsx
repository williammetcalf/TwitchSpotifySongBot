import "./App.css";

import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import coreTheme from "../config/theme";
import HomePage from "../Pages/Home";
import FinalizeSpotifyAuth from "../Pages/Home/FirstTimeSetup/FinalizeSpotifyAuth";
import LoginPage from "../Pages/Login";

function App() {
  return (
    <ThemeProvider theme={coreTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" exact component={LoginPage} />
          <Route path="/" exact component={HomePage} />
          <Route
            path="/spotifyCallback"
            exact
            component={FinalizeSpotifyAuth}
          />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
