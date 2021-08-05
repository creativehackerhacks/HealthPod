import './App.css';
import Welcome from "../src/pages/welcome/welcome";
import SignIn from "../src/pages/signin/sign_in";
import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

 
  render() {
    return (
      <SignIn />
    );
  }
}
