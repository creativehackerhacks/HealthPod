import React, { makeStyles, useTheme } from "react";
import "./home.css";
import TabPanel from "../../compon/tabPanel/tabPanel";

import History from "../../pages/routes/history";
import { Router, Switch, Route } from "react-router-dom";

import Overview from "../home/overview/overview";
import Search from "../home/search/search";
import Notification from "../home/notification/notification";
import Profile from "../home/profile/profile";
import EditProfile from "../home/profile/editProfile/editProfile";
import Detail from "../../compon/models/detail/detail";

export default function Home(props) {
  return (
    <div className="root-container">
      <div className="vertical-section-first">
        <div className="section-tabs">
          <TabPanel />
        </div>
      </div>
      <div className="vertical-section-second">
        <div className="container-data">
          <Router history={History}>
            <Switch>
              <Route path="/Home/Profile" exact component={Profile} />
              {/* <Route path="/Home/Notification" component={Notification} /> */}
              <Route path="/Home/Search" component={Search} />
              <Route path="/Home/Overview" component={Overview} />
              <Route path="/Home/EditProfile" component={EditProfile} />
              <Route path="/Home/Detail" component={Detail} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
