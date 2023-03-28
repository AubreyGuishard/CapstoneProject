import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Player = ({player}) => {
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);

useEffect(() => {
    const fetchGames = async () => {
        try {
            let url = "http://127.0.0.1:8000/api/game/all/"
            let response = await axios.get(url)
            setGames(response.data)
        }
        catch (error) {
            console.log(error.response.data)
        }
    };
    fetchGames();
}, []);

const arrayForPlayers = games.player
    console.log(Player)
    return ( <div> {player.username}</div> );
}
 
export default Player;