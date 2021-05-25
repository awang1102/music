import React from "react";
import "./Songs.css";

const Songs = ({name, rank, artists, album, image, url}) => {
    rank += 1;
    return(
        <div className="song">
            <a href={url}>
                <img className="album-img" src={image} alt=""/>
            </a>
            <div className="song-info">
                <div>{rank}. {name}</div>
                <div>{album}</div>
                <div>{artists.join(', ')}</div>
            </div>
        </div>
    );
}

export default Songs;