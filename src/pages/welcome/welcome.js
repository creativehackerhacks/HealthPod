import './welcome.css'
import Button from "../../compon/button/button";
import ProfileImage from "../../compon/profile/profile_image"
import React, {useState} from "react";
import firebaseConfig from '../../config/firebase_config'

import history from '../routes/history'

export default function Welcome (props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  firebaseConfig.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

    function handleClick() {
      history.push('/Signin');
      console.log("isLogged: ", isLoggedIn);
    };
  
    const url = "https://images.unsplash.com/photo-1620383900236-207b0fd5783b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1876&q=80"
  
      return (
        <div className="container">
          <div className="top">
            {/* <h1>Let's learn <br></br><span className="head_span">How to learn stuff</span></h1> */}
            <ProfileImage className="profile" imageSrc={url} />
            <p>By importing your SQL script, you can automatically create a database model, make changes, and generate new SQL script, along with Alter scripts.</p>
          </div>

          <div className="bottom">
            <Button name="Sign in" clickHandler={handleClick} btnType="sign-in"/>
            <Button name="Sign up" clickHandler={handleClick} btnType="sign-up"/>
          </div>
        </div>
      );
  }
  