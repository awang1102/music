import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return(
        <div className="nav-bar">
            <a className="nav-button home-button">
                <Link className="link-text" to="/">Home</Link>
            </a>
            <a className="nav-button artist-button">
                <Link className="link-text" to="/artists">Artists</Link>
            </a>
            <a className="nav-button song-button">
                <Link className="link-text" to="/songs">Songs</Link>
            </a>
        </div>
    );
}

export default Navigation;