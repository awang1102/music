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

    const getProfile = async () => {
        const response = await fetch(`https://api.spotify.com/v1/me`,
        {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            })
        });
        const data = await response.json();
        dispatch({
            type: "SET_USER",
            user: data
        });
    }

    const getRecommendations = async () => {
        const limit = 10;
        const seedArtists = [artists[0].id, artists[1].id];
        const seedSongs = [songs[0].id, songs[1].id, songs[2].id];
        const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=${limit}&seed_artists=${seedArtists.join(",")}&seed_tracks=${seedSongs.join(",")}`,
        {
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            })
        });
        const data = await response.json();
        dispatch({
            type: "SET_RECOMMENDED",
            recommended: data
        });
    }

    useEffect(() => {
        getTopArtists();
        getTopSongs();
        getProfile();
    }, []);

    useEffect(() => {
        if (artists.length > 0 && songs.length > 0) {
            getRecommendations();
        }
    }, [artists, songs]);
    
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