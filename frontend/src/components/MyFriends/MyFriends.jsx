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
    const [userFriends, setUserFriends] = useState();
    const navigate = useNavigate()

    async function toggleUserFriend(){
        let url = `http://127.0.0.1:8000/api/auth/user/follow/${attendee.id}/`
        let response = await axios.patch(url, user)
        console.log(response)
    }

    async function getUserFriends(user){
        let url = `http://127.0.0.1:8000/api/auth/user/${user.id}`
        let response = await axios.get(url)
        setFriends(response.data.friends)
        console.log(response.data)


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


    return ( <div>My Friends
        <MyFriendsList/>
    </div>  );
}
 
export default UserFriends;