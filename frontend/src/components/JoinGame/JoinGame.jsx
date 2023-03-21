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
                `http://127.0.0.1:8000/api/game/join/${game.id}/`,
                {
                    headers: {
                        Authorization: "Bearer" + token
                    }
                }
            );
            if (response.status === 201) {
                navigate('join/<int:pk>/');
            }
        } catch(error){
            console.log(error.formData);
        }
    }

    async function handleJoinGame() {
        if (token){
            JoinGame(user)
            setPlayers(game.attendees)
        }
        else {
            alert("Must be signed in to join game.")
            navigate("/login")
        }
    }

    return ( 
        <div>
            {<button onClick={handleJoinGame}>Join Game!</button>}
        </div>
     );
}
 
export default JoinGame;