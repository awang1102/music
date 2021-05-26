import React from "react";
import "./Songs.css";

const Songs = ({name, rank, artists, image, url}) => {
    rank += 1;
    return(
        <div className="song">
            <a href={url}>
                <img className="album-img" src={image} alt=""/>
            </a>
            <div className="song-info">
                <div className="song-name">{rank}. {name}</div>
                <div className="artist-names">{artists.join(', ')}</div>
            </div>
        </div>
    );
}

export default Songs;