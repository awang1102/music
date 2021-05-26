import React from 'react';
import "./SongsPage.css"
import Songs from "../Songs";
import { useDataLayerValue } from "../DataLayer";
import Navigation from './Navigation';

const SongsPage = () => {

    document.body.style.overflow = 'visible';

    const [{ songs }, dispatch] = useDataLayerValue();

    return(
        <div className="songs">
                <Navigation/>
                <div className="songs-list">
                    {songs.map((song, index) => (
                        <Songs 
                            name={song.name}
                            rank={index}
                            artists={song.artists.map(artist => artist.name)}
                            image={song.album.images[0].url}
                            url={song.external_urls.spotify}
                            key={song.id}
                        />
                    ))}
                </div>
            </div>
    );

};

export default SongsPage;