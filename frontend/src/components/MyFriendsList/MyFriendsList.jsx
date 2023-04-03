import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import MyFriends from '../MyFriends/MyFriends'
const MyFriendsList = () => { 
const [user, token] = useAuth()
const [friendList, setFriendList] = useState([])
const [friends, setFriends] = useState([{}])
const navigate = useNavigate

const fetchDataFromAPI = async () => {
    let url = `http://127.0.0.1:8000/api/auth/user/${user.id}/`
    let response = await axios.get(url, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    setFriends(response.data.friends)
}

useEffect(() => {
    fetchDataFromAPI()
}, []);

async function toggleUserFriend(){
    try{
       let url = `http://127.0.0.1:8000/api/auth/user/follow/${attendee.id}/`
       let response = await axios.patch(url, {user},
           {
               headers: {
                   Authorization: "Bearer " + token
               }
           }
           );
           if (response.status === 201){
               navigate("/myfriends/")
           }
       console.log(response)
    }  catch(error){
       console.log('Error Message', error.message);
       console.log('Token', token)
    }
   }


   function handleFriend(){
    if (token){
        toggleUserFriend()
        setFriends(true)
        fetchDataFromAPI(user)
    }
    else{
        navigate('/login/')
    }
}

function handleUnfriend(){
    if (token){
        toggleUserFriend()
        setFriends(false)
        fetchDataFromAPI(user)
    }
}

useEffect(() => {
    fetchDataFromAPI(user)
    console.log('My Friends List', friends)
}, [])

return (<ul>
{friends.map(item => (
    <li key={item.id}>{item.username}</li>
))}
{/* <MyFriends/> */}
</ul>);
}

 
export default MyFriendsList;