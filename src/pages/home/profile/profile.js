import './profile.css';
import React, {useState} from 'react';
import history from '../../routes/history'
import EditProfile from '../profile/editProfile/editProfile'

import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export default function Profile() {

    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'DVT' },
        { key: 1, label: 'Common Cold' },
        { key: 2, label: 'Dizziness' },
      ]);
    
    const coverImageUrl = "https://images.unsplash.com/photo-1620462502030-1b49ec069a96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=983&q=80";
    const proImageUrl = "https://images.unsplash.com/photo-1470009862877-9004bc12fc8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";

    function handleClick() {
        history.push('/Home/EditProfile');
      };

    return(
        <div className="container-profile">
            <div className="container-top">
                <img className="cover-image" src={coverImageUrl}/>
                <Avatar className="dumb" alt="Profile Image" src={proImageUrl}></Avatar>
                <button className="edit-profile" onClick={handleClick}>
                    Edit Profile
                </button>
                <h4>Ansh</h4>
                <p>Above average commercial and lifestyle photography. Interested in collaborating? Scope my website https://www.blakeliskphoto.com for more info.</p>
            </div>
            <div className="container-middle">
                <h5>Past History</h5>
                <div className="interests">
                {chipData.map((data) => {
                    let icon;
                    return (
                    <li key={data.key}>
                    <Chip
                        color="primary"
                        label={data.label}
                        className={data.label}
                        />
                        </li>
                        );
                    })}
                </div>
            </div>
            <div className="container-bottom">

            </div>
        </div>
    )
}