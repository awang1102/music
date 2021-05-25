import React from "react";
import "./Artist.css";

const Artist = ({name, rank, image, url}) => {
    rank += 1;
    return(
        <div className="artist">
            <a href={url}>
                <img className="artist-img" src={image} alt=""/>
            </a>
            <div className="name">{rank}. {name}</div>
        </div>
    );
}

export default Artist;