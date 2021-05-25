import React, {useEffect} from "react";
import "./Home.css";
import { useDataLayerValue } from "../DataLayer";
import Navigation from "./Navigation";


function Home() {
    
    const [{ token, artists, songs }, dispatch] = useDataLayerValue();

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
        <div className="homepage">
            <Navigation />
        </div>
    );
}

export default Home;