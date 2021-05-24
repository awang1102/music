import React, {useEffect} from "react";
import Artist from "../Artist";
import Songs from "../Songs";
import "./Home.css";
import { useDataLayerValue } from "../DataLayer";


function Home({token}) {
    
    const [{ artists, songs }, dispatch] = useDataLayerValue();

    const getTopArtists = async () => {
        const type = "artists";
        const time_range = "short_term";
        const limit = 10;
        const response = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}`,
        {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            })
        });
        const data = await response.json();
        console.log(data.items);
        dispatch({
            type: "SET_ARTISTS",
            artists: data.items
        });
    }

    const getTopSongs = async () => {
        const type = "tracks";
        const time_range = "short_term";
        const limit = 10;
        const response = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}`,
        {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            })
        });
        const data = await response.json();
        console.log(data.items);
        dispatch({
            type: "SET_SONGS",
            songs: data.items
        });
    }

    useEffect(() => {
        getTopArtists();
        getTopSongs();
    }, []);
    
    return (
        <div className="blocks">
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
            <div className="songs">
                {songs.map(song => (
                        <Songs 
                            name={song.name}
                            artists={song.artists.map(artist => artist.name)}
                            album={song.album.name}
                            image={song.album.images[0].url}
                            url={song.external_urls.spotify}
                            key={song.id}
                        />
                ))}
            </div>
        </div>
    );
}

export default Home;