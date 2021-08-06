import React, { Component, useState } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Welcome from "../welcome/welcome";
import SignIn from "../signin/sign_in";
import SignUp from "../signup/sign_up";
import Home from "../home/home";

import firebaseConfig from "../../config/firebase_config";

import History from "./history";

export default function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebaseConfig.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  return (
    <Router history={History}>
      {isLoggedIn ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/Signup" exact component={SignUp} />
            <Route path="/Signin" exact component={SignIn} />
            <Route path="/Home" exact component={Home} />
          </Switch>
        </>
      )}
    </Router>
  );
}
