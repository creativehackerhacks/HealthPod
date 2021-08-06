import React, { useState, useEffect } from "react";
import "./search.css";

import ReactTypingEffect from "react-typing-effect";
import FirebaseConfig from "../../../config/firebase_config";
import AlgoliaConfig from "../../../config/algolia_config";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
// import DoneIcon from '@material-ui/icons/Done';

const db = FirebaseConfig.firestore();
const index = AlgoliaConfig;

export default function Search() {
  const [symptoms, setSymptoms] = useState([]);
  const [searchIP, setSearchIP] = useState("");
  const [disease, setDisease] = useState([]);
  const [dName, setName] = useState("");
  const [dDesc, setDescription] = useState("");

  useEffect(() => {
    db.collection("symptoms")
      .limit(100)
      .onSnapshot((snapshot) => {
        console.log("Firebase Snap!");
        setSymptoms(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              name: doc.data().symptom,
            };
          })
        );
      });
  }, []);

  useEffect(() => {
    index.search(searchIP).then(({ hits }) => {
      if (hits.length != 0) {
        setName(hits[0].disease);
        setDescription(hits[0].description);
      }
      setDisease(
        hits.map((doc) => {
          // setName(doc.disease);
          console.log("SRE:: " + doc.disease);
          return {
            id: doc.id,
            name: doc.disease,
          };
        })
      );
    });
  }, [searchIP]);

  function handleInputChange(param) {
    console.log("Change: " + param);
    setSearchIP(param);
  }

  return (
    <div className="search-container">
      <div className="search-top">
        <div className="search-top-container">
          <h1 className="search-title">Disease Suggestion (Best Match)</h1>
          <h3 className="search-disease">
            {dName.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h3>
          <p className="search-disease-desc">{dDesc}</p>
        </div>
      </div>
      <div className="search-bottom">
        <div className="search-tab">
          <input
            className="search-tab-input"
            type="text"
            placeholder="Search"
            onChange={(ip) => {
              handleInputChange(ip.target.value);
            }}
          />
        </div>
        <div className="search-suggestion">
          <p>Possibilities</p>
          {disease.map((data) => {
            return (
              <Chip
                key={data.id}
                className="search-symptom-chip"
                avatar={<Avatar>{data.name[0]}</Avatar>}
                label={data.name
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
                clickable
                color="primary"
              />
            );
          })}
          <hr></hr>
        </div>
        <div className="search-symptoms">
          <p>Suggested</p>
          {symptoms.map((symptom) => {
            return (
              <Chip
                key={symptom.id}
                className="search-symptom-chip"
                avatar={<Avatar>{symptom.name[0]}</Avatar>}
                label={symptom.name
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
                clickable
                color="primary"
                variant="outlined"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
