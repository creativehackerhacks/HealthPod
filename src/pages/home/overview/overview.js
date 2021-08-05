import "./overview.css";
import React, { useState, useEffect } from "react";

import firebaseConfig from "../../../config/firebase_config";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
} from "@material-ui/core";
import randomColor from "randomcolor";

import hero from "../../../assets/images/owl.svg";
import Detail from "../../../compon/models/detail/detail";
import history from "../../routes/history";

const db = firebaseConfig.firestore();

export default function Overview() {
  const url =
    "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80";

  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    console.log("useEffect Hook!!!");

    db.collection("diseases").onSnapshot((snapshot) => {
      console.log("Firebase Snap!");
      setDiseases(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().disease,
            desc: doc.data().description,
          };
        })
      );
    });
  }, []);

  // handle disease item click
  function handleClick() {
    <Detail />;
  }

  return (
    <div className="container-overview">
      <div className="container-top">
        <div className="container-hero-img">
          <img className="hero-img" src={url} />
          <div className="container-head-info">
            <h2 className="container-head">
              <span className="head-span">Disease</span> list with their
              symptoms
            </h2>
            <p className="container-para">
              React is all the rage these days and rightfully so! It helps us
              tremendously with creating rich, interactive UIs. However, the
              design aspect of the project is still on our strong{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="card-list">
        {diseases.map((disease) => {
          return (
            <div key={disease.id} className="card-outer" onClick={handleClick}>
              <div className="card-top-info">
                <div
                  className="card-pro-bg"
                  style={{
                    backgroundColor: randomColor({
                      luminosity: "light",
                      hue: "blue",
                    }),
                  }}
                >
                  <p className="card-img-text">
                    {disease.name[0].toUpperCase()}
                  </p>
                </div>
                <div className="card-title">
                  <p>
                    {disease.name
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </p>
                </div>
              </div>
              <div className="card-bottom-info">
                <p className="card-desc">{disease.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <List dense={true}>
                {diseases.map(disease => {
                    return(<ListItem key={disease.id}>
                        <ListItemText primary={disease.name} />
                        {console.log(disease.name)}
                    </ListItem>)
                })}
            </List> */
}
