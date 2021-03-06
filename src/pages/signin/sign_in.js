import "./sign_in.css";
import Home from "../home/home";
// import InputForm from "../../compon/input_form/ip_form";
import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import firebaseConfig from "../../config/firebase_config";

import history from "../routes/history";

// customize react ui components
const useStyles = makeStyles({
  contained: {
    borderRadius: 100,
  },
});

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleGoogleSignIn(e) {
    e.preventDefault();
    var provider = firebaseConfig.auth.GoogleAuthProvider();
    firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  function handleSignIn(e) {
    e.preventDefault();
    console.log("email: ", email);
    console.log("password: ", password);
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("Incorrect email or password");
      });
  }

  function onBackSpace() {
    history.goBack();
  }

  const classes = useStyles();

  return (
    <div className="container">
      <div className="toolbar">
        <MdKeyboardBackspace className="back_icon" onClick={onBackSpace} />
      </div>
      {/* <InputForm labelName="Full Name" ipType="text"/>
        <InputForm labelName="Email" ipType="email"/> */}
      <form
        className="form-root"
        noValidate
        autoComplete="off"
        onSubmit={handleSignIn}
      >
        <div className="form-info">
          <h1>Welcome back! Glad to see you</h1>
        </div>
        <div className="form-container">
          <TextField
            className="email"
            required
            label="Email"
            type="email"
            variant="outlined"
            onChange={({ target }) => setEmail(target.value)}
          />
          <TextField
            className="password"
            required
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button
            className={classes.contained}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
        <div className="form-bottom">
          <div className="div-container">
            <Divider className="divider" variant="middle" />
            <h4>or</h4>
          </div>
          <div className="div-google-signin">
            <Button
              className={classes.contained}
              variant="contained"
              color="secondary"
              onClick={handleGoogleSignIn}
            >
              Google signin
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
