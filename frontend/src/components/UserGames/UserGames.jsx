import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CalendarForUser from "../CalendarForUser/CalendarForUser";
import JoinGame from "../JoinGame/JoinGame";
const UserGames = ({ playerGame }) => {
  const [user, token] = useAuth();
  const [thing, setThing] = useState();
  const [username, setUsername] = useState("");

  const [gamesHook, setGamesHook] = useState([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/game/all/`);
        let results = response.data
          .filter((game) => {
            let is_here = false;
            for (let i = 0; i < game.attendees.length; i++) {
              if (game.attendees[i].id == user.id) {
                is_here = true;
              }
            }

            return is_here;
          })
          .map((game) => (
            <div key={game.id}>
              {game.attendees.map((attendee) => (
                <div key={attendee}>{attendee.username}<button>follow</button></div>
              ))}
              {console.log("Game Attendees", game.attendees)}
              <h5>{game.type}</h5>
              <h5>{game.court_type}</h5>
              <h5>{game.score}</h5>
              <h5>{game.time}</h5>
              <h5>{game.date}</h5>
              <h5>{game.city}</h5>
              <h5>{game.state}</h5>
              <h5>{game.street}</h5>
              <h5>{game.zipcode}</h5>
            </div>
          ));

        setThing(results);
        // setUsername(attendees_player)

        setGamesHook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllGames();
  }, []);

  useEffect(() => {
    const yourGames = gamesHook;
  }, []);

  return (
    <section id="UserGames">
      <h1>Your Games</h1>
      <div className="UserGame-List">{username}</div>
      {thing}
    </section>
  );
};

export default UserGames;
