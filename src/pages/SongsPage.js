import React from 'react';
import Songs from "../Songs";
import { useDataLayerValue } from "../DataLayer";
import Navigation from './Navigation';

const SongsPage = () => {

    const [{ songs }, dispatch] = useDataLayerValue();

    return(
        <div className="songs">
                <Navigation />
                {songs.map((song, index) => (
                    <Songs 
                        name={song.name}
                        rank={index}
                        artists={song.artists.map(artist => artist.name)}
                        album={song.album.name}
                        image={song.album.images[0].url}
                        url={song.external_urls.spotify}
                        key={song.id}
                    />
                ))}
            </div>
    );

};

export default SongsPage;