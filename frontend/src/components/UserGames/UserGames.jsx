import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import CalendarForUser from '../CalendarForUser/CalendarForUser';
const UserGames = () => {
const [user, token] = useAuth()
const [thing , setThing] = useState()

const [gamesHook, setGamesHook] = useState([])

useEffect(() => {
    const fetchAllGames = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/game/all/`)
        let results = response.data.filter((game) => {
            let is_here = false
            for(let i =0; i<game.attendees.length;i++){
                if(game.attendees[i].id == user.id){
                    is_here =true
                }
            }
            return is_here
        }

        ).map(game =>   <tr key={game.id}>
            {console.log(game)}
            <td>{game.type}</td>
            <td>{game.court_type}</td>
            <td>{game.score}</td>
            <td>{game.time}</td>
            <td>{game.date}</td>
            <td>{game.city}</td>
            <td>{game.state}</td>
            <td>{game.street}</td>
            <td>{game.zipcode}</td>
          </tr> )
          setThing(results)
       
        setGamesHook(response.data)
      }
      catch (error) {
        console.log(error.response.data)
      }
    };
    fetchAllGames();
  }, []);


    useEffect(()=>{
        const yourGames = gamesHook
    },[])
  
  
   
    return ( 
        <section id='UserGames'>
            <h1>Your Games</h1>
            <div className='UserGame-List'></div>
            {thing}
        </section>
     );
}
 
export default UserGames