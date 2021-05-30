import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useDataLayerValue } from "../DataLayer";
import Navigation from './Navigation';


const Profile = () => {
    
    const [{ user }] = useDataLayerValue();
    
    return(
        <div className="profile-page">
            <Navigation />
            <div className="profile-body">
                <div>
                    <img src={user.images[0].url} alt="profile image" className="profile-img"/>
                </div>
                <div className="user-name">{user.display_name}</div>
                <div className="user-id">ID: {user.id}</div>
                <div className="get-button">
                    <Link className="link-text" to="/recommendations">Get playlist based on your listening</Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;