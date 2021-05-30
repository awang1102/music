import React from "react";
import "./Profile.css";
import { useDataLayerValue } from "../DataLayer";
import Navigation from './Navigation';


const Profile = () => {
    
    const [{ user }] = useDataLayerValue();
    
    return(
        <div className="profile-page">
            <Navigation />
            <div>
                <img src={user.images[0].url} alt="profile image" className="profile-img"/>
            </div>
            <div className="user-name">{user.display_name}</div>
            <div className="user-id">ID: {user.id}</div>
        </div>
    );
}

export default Profile;