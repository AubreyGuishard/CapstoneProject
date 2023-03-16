import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import NewGameForm from "../../components/NewGameForm/NewGameForm";
import UserNavBar from "../../components/UserNavBar/UserNavBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
 
  const [games, setGames] = useState([]);

useEffect(() => {
  const fetchAllGames = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/game/all/")
      console.log(response.data)
      setGames(response.data)
    }
    catch (error) {
      console.log(error.response.data)
    }
  }
  fetchAllGames();
}, []);


const arrayForGames = games.map((games) => {
  return (
    <tr>
      <td>{games.type}</td>
      <td>{games.court_type}</td>
      <td>{games.score}</td>
      <td>{games.time}</td>
      <td>{games.date}</td>
      <td>{games.city}</td>
      <td>{games.state}</td>
      <td>{games.street}</td>
      <td>{games.zipcode}</td>
    </tr>
  )
})


  return (
    <div className="container">
      <UserNavBar/>
      {/* <NewGameForm/> */}
      {/* <h1>Home Page for {user.username}!</h1> */}
      {/* <Link to="/postgame">Create a Game!</Link> */}
      <tr>
        <th>type</th>
        <th>court type</th>
        <th>score</th>
        <th>Time</th>
        <th>Date</th>
        <th>City</th>
        <th>State</th>
        <th>Street</th>
        <th>Zipcode</th>
      </tr>
      {arrayForGames}
    </div>
  );
};

export default HomePage;
