import React from "react";
import "./Login.css";


const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "e06f58a8015a4397a0635d21cc0bc803";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
];

const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&show_dialog=true`;

export const getTokenFromUrl = () => {
    const url = window.location.hash;
    const startIndex = url.indexOf('=') + 1;
    const endIndex = url.indexOf('&');
    return url.substring(startIndex, endIndex);
};

function Login() {
    return (
      <div className="login">
        <img className="logo"
          src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
          alt="Spotify logo"
        />
        <a className="login-button" href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    );
}

export default Login;