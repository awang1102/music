import React from 'react';
import Artist from "../Artist";
import { useDataLayerValue } from "../DataLayer";

const ArtistsPage = () => {

    const [{ artists }, dispatch] = useDataLayerValue();

    return(
        <div className="artists">
                {artists.map(artist => (
                    <Artist 
                        name={artist.name}
                        image={artist.images[0].url}
                        url={artist.external_urls.spotify}
                        key={artist.id}
                    />
                ))}
            </div>
    );

};

export default ArtistsPage;