import React from 'react';
import "./ArtistsPage.css";
import Artist from "../Artist";
import { useDataLayerValue } from "../DataLayer";
import Navigation from './Navigation';
import Arrows from "./Arrows";

const ArtistsPage = () => {

    document.body.style.overflow = 'hidden';
    
    const [{ artists }, dispatch] = useDataLayerValue();
    const artistMapping = 
        artists.map((artist, index) => (
            <Artist 
                name={artist.name}
                rank={index}
                image={artist.images[0].url}
                url={artist.external_urls.spotify}
                key={artist.id}
            />
        ));

    return(
        <div className="page">
                <Navigation />
                <div className="body"> 
                    {artistMapping}
                </div>
                <Arrows mapping={artistMapping}/>
            </div>
    );

};

export default ArtistsPage;