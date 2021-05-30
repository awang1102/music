import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from "../DataLayer";
import "./Recommend.css"
import Navigation from "./Navigation";

const Recommend = () => {

    const [{ user, token, recommended }] = useDataLayerValue();
    let playlistID = "";
    let playlistURL = "";
    const [playlistData, setPlaylistData] = useState([]);
    
    const createPlaylist = async () => {
        try {
            const url = `https://api.spotify.com/v1/users/${user.id}/playlists`;
            const config = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    "name": "Your Recommended Songs",
                    "description": "Auto-generated playlist of recommended songs by Spotify Unwrapped"
                })
            }
            const response = await fetch(url, config);
            if (response.ok) {
                const data = await response.json();
                playlistID = data.id;
                playlistURL = data.external_urls.spotify;
                addSongs();
            } else {
                console.log("Failed: ", response);
            }
        } catch (error) {
                console.log(error);
        }
    }

    const addSongs = async () => {
        try {
            const params = recommended.map(song => `spotify:track:${song.id}`);
            const url = `https://api.spotify.com/v1/playlists/${playlistID}/tracks?uris=${params.join(',')}`;
            const config = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
            const response = await fetch(url, config);
            if (response.ok) {
                console.log("Success: ", response.json()); 
                setPlaylistData([playlistID, playlistURL]);    
            } else {
                console.log("Failed: ", response);
            }
        } catch (error) {
                console.log(error);
        }
    }

    useEffect(() => {
        createPlaylist();
    }, []);
    
    return(
        <div>
            <Navigation />
            {playlistData ? <a className="rec-text" href={playlistData[1]}>
                Your playlist is here
                </a> : <div className="rec-text">Loading</div>}
        </div>
    );
}

export default Recommend;