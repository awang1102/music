import React from 'react';
import "./ArtistsPage.css";
import Artist from "../Artist";
import { useDataLayerValue } from "../DataLayer";
import Navigation from './Navigation';
import Arrows from "./Arrows";

const ArtistsPage = () => {

    const [{ artists }, dispatch] = useDataLayerValue();

    return(
        <div className="page">
                <Navigation />
                <Arrows />
                <div className="body"> 
                    {artists.map((artist, index) => (
                        <Artist 
                            name={artist.name}
                            rank={index}
                            image={artist.images[0].url}
                            url={artist.external_urls.spotify}
                            key={artist.id}
                            className="element"
                        />
                    ))}
                </div>
            </div>
    );

};

export default ArtistsPage;