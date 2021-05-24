import React from "react";
import "./Songs.css";

const Songs = ({name, artists, album, image, url}) => {
    return(
        <div className="song">
            <a href={url}>
                <img className="album-img" src={image} alt=""/>
            </a>
            <div className="song-info">
                <div>{name}</div>
                <div>{album}</div>
                <div>{artists.join(', ')}</div>
            </div>
        </div>
    );
}

export default Songs;