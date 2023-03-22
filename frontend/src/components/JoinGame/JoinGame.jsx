import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
const JoinGame = ({game, getGame}) => {
    const [players, setPlayers] = useState(game.attendees)
    const [user, token] = useAuth();
    const navigate = useNavigate()
    async function JoinGame(){
        try {
            let response = await axios.patch(
                `http://127.0.0.1:8000/api/game/join/${game.id}/`, {},
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            if (response.status === 201) {
                navigate("/yourgames");
            }
        } catch(error){
            console.log('Error Message', error.message);
            console.log('Token', token)
        }
    }
    async function getGameById(game){
        let url = `http://127.0.0.1:8000/api/game/${game.id}/`
        let response = await axios.get(url,{
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setPlayers(response.data.attendees)
    }


    async function handleJoinGame() {
        if (token){
            JoinGame(user)
            getGameById(game)
        }
        else {
            alert("Must be signed in to join game.")
            
        }
    }

    async function handleCantJoinGame(){
        alert("Must be signed in to join")
        navigate("/login")
    }

    return ( 
        <div>
            {user ? <button onClick={handleJoinGame}>Join Game!</button>: <button onClick={handleCantJoinGame}> Join Game! </button>}
        </div>
     );
}
 
export default JoinGame;