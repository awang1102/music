import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";
import profileButton from '../img/profile-user.svg';


const Navigation = () => {
    return(
        <div className="nav-bar">
            <div className="nav-section">
                <div className="nav-button home-button">
                    <Link className="link-text" to="/">Home</Link>
                </div>
                <div className="nav-button artist-button">
                    <Link className="link-text" to="/artists">Artists</Link>
                </div>
                <div className="nav-button song-button">
                    <Link className="link-text" to="/songs">Songs</Link>
                </div>
            </div>
            <Link className="link-text" to="/profile">
                        <img src={profileButton} alt="profile button" className="profile-button"/>
            </Link>
        </div>
    );
}

export default Navigation;