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
        const limit = 25;
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
            <div className="text">
                <div id="line1">View the</div>
                <div id="line2">
                    <span className="voice-text">voices</span> and <span className="tune-text">tunes</span>
                </div>
                <div id="line3">that you've had</div>
                <div id="line4">on repeat</div>
            </div>
        </div>
    );
}

export default Home;