import React, { useEffect } from 'react';
import { useDataLayerValue } from "../DataLayer";

const Recommend = () => {

    const [{ user, token }] = useDataLayerValue();
    let playlistID = "";
    let playlistURL = "";
    
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
            } else {
                console.log("Failed: ", response);
            }
        } catch (error) {
                console.log(error);
        }
    }

    const addSongs = async () => {
        
    }

    useEffect(() => {
        createPlaylist();
    }, []);
    
    return(
        <div></div>
    );
}

export default Recommend;