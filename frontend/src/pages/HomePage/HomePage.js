import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import NewGameForm from "../../components/NewGameForm/NewGameForm";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import UserGames from "../../components/UserGames/UserGames";
import JoinGame from "../../components/JoinGame/JoinGame";
import PlayerList from "../../components/PlayerList/PlayerList";
import MyFriendsList from "../../components/MyFriendsList/MyFriendsList";
import Attendee from "../../components/Attendee/Attendee";
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
 
  const [games, setGames] = useState([]);
  

useEffect(() => {
  const fetchAllGames = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/game/all/");
     
      setGames(response.data)
    }
    catch (error) {
      console.log(error.response.data)
    }
  };
  fetchAllGames();
}, []);


const arrayForGames = games.map((game) => {
  return (
    <div>
      <h5>{game.type}</h5>
      <h5>{game.court_type}</h5>
      <h5>{game.score}</h5>
      <h5>{game.time}</h5>
      <h5>{game.date}</h5>
      <h5>{game.city}</h5>
      <h5>{game.state}</h5>
      <h5>{game.street}</h5>
      <h5>{game.zipcode}</h5>
      <JoinGame game={game} />
      <Attendee/>
    </div>
  )
})


  return (
    <div className="container">
      <UserNavBar/>n 
      {arrayForGames}
      {/* <PlayerList/> */}

      
    </div>
   
  );
};

export default HomePage;
