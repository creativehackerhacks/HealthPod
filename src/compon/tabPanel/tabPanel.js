import React from 'react';
import './tabPanel.css'
import Tab from '../tabs/tab'
import { NavLink } from 'react-router-dom';
import history from '../../pages/routes/history'


export default function TabLabel(props) {

    function handleClick(path) {
        history.replace('/Home/' + path)
    }

    return (
        <div className="tab-container">
            <NavLink className="link" to="/Home/Overview" onClick={handleClick("Overview")}><Tab tabLabel="Overview"/></NavLink>
            <NavLink className="link" to="/Home/Search" onClick={handleClick("Search")}><Tab tabLabel="Search"/></NavLink>
            {/* <NavLink className="link" to="/Home/Notification" onClick={handleClick("Notification")}><Tab tabLabel="Notification"/></NavLink> */}
            <NavLink className="link" to="/Home/Profile" onClick={handleClick("Profile")}><Tab tabLabel="Profile"/></NavLink>
        </div>
    );

}