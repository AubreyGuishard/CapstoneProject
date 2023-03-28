import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const MyFriendsList = () => { 
const [user, token] = useAuth()
const [friendList, setFriendList] = useState([])
const [friends, setFriends] = useState()
const navigate = useNavigate

useEffect(() => {
    const fetchFriends = async () => {
        let url = `http://127.0.0.1:8000/api/auth/user/${user.id}/`
        try{
        let response = await axios.get(url,
        {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        );
        let results = response.data.filter((user) =>{
            let friends_here = false
            for (let i = 0; user.friends.lenght; i++){
                if(user.friends[i].id == user.id){
                    friends_here = true
                }
            }
            return friends_here
        }
        ).map(friends => <div key={user.id}>
            {console.log(friends)}
            <h5>{user.username}</h5>
            <h5>{user.friends}</h5>
        </div>)
        setFriends(results)

        setFriendList(response.data)
        }
        catch (error) {
                console.log('Error Message', error.message);
                console.log('Token', token)
        }
    };
    fetchFriends();

}, []);

return (<section id='MyFriends'>
    <h1>Your Friends</h1>
    <div className='MyFriends-List'></div>
    {friends}
</section>);
}

 
export default MyFriendsList;