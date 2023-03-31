import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Attendee = () => {
const [user, token] = useAuth()
const [attendees, setAttendees] = useState([])

const fectchAttendeesFromAPI = async () => {
    let url = "http://127.0.0.1:8000/api/game/all/"
    let response = await axios.get(url)
    setAttendees(response.data.game.attendees)
    console.log("Attendees thingy:", fectchAttendeesFromAPI)
    console.log("Attendees data:", response.data.game.attendees)
}

useEffect(() => {
    fectchAttendeesFromAPI()
}, [])




    return ( <ul>
        {attendees.map(item => (
            <li key={item.id}>{item.username}</li>
        ))}
    </ul> );
}
 
export default Attendee;