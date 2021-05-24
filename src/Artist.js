import React from "react";
import "./Artist.css";

const Artist = ({name, image, url}) => {
    return(
        <div className="artist">
            <a href={url}>
                <img className="artist-img" src={image} alt=""/>
            </a>
            <div className="name">{name}</div>
        </div>
    );
}

export default Artist;