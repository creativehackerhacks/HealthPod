import "./editProfile.css";
import React, { useState } from "react";

import { MdKeyboardBackspace } from "react-icons/md";
import Button from "../../../../compon/button/button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import firebaseConfig from "../../../../config/firebase_config";
import Welcome from "../../../welcome/welcome";

import history from "../../../routes/history";

export default function EditProfile() {
  function handleLogOut() {
    // firebaseConfig.auth().signOut();
    history.replace("/");
  }

  function onBackSpace() {
    history.goBack();
  }

  return (
    <div className="container-editProfile">
      <div className="edit-profile-nav">
        <MdKeyboardBackspace className="back_icon" onClick={onBackSpace} />
      </div>
      <div className="logout">
        <Button
          className="btn-logout"
          name="Log out"
          clickHandler={handleLogOut}
          btnType="sign-in"
        />
      </div>
    </div>
  );
}
