import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MyFriendsList from '../MyFriendsList/MyFriendsList';
const UserFriends = ({attendee}) => {
    const [user, token] = useAuth();
    const [friends, setFriends] = useState(false);
    const [userFriends, setUserFriends] = useState([{}]);
    const navigate = useNavigate()

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

    async function getUserFriends(user){
        let url = `http://127.0.0.1:8000/api/auth/user/${user.id}/`
        let response = await axios.get(url,{
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setFriends(response.data.friends)
        console.log(response.data)
        let results = response.data.friends.filter(e => e.id === attendee.id)
        if(results.length>0){
         setFriends(true)   
        }

    }

    function handleFriend(){
        if (token){
            toggleUserFriend()
            setFriends(true)
            getUserFriends(user)
        }
        else{
            navigate('/login/')
        }
    }

    function handleUnfriend(){
        if (token){
            toggleUserFriend()
            setFriends(false)
            getUserFriends(user)
        }
    }

    useEffect(() => {
        getUserFriends(user)
        console.log('My Friends List', userFriends)
    }, [])

    return ( <div>
        {/* {friends ? <button onClick={handleUnfriend}>UnFriend</button>: <button onClick={handleFriend}>Friend</button>}
        {user ? <button onClick={handleFriend}> Friend</button>: <button onClick={handleUnfriend}>UnFriend</button>} */}
        <MyFriendsList/>
    </div>  );
}
 
export default UserFriends;