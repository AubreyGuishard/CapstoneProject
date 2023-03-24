import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const MyFriendsList = () => { 
const [user, token] = useAuth()
const [friendList, setFriendList] = useState([])

// useEffect(() => {
//     const fetchAllFriends = async () => {
//     //     try {
//     //         let url = `http://127.0.0.1:8000/api/game/${user.id}/`
//     //         let response = await axios.get(url, user)
//     //         let results = response.data.filter((user) => {
//     //             let is_friend = false
                
//     //         })
//     //     }
//     // }
//     // catch{

//     // }
// })





    return (<div>MyFriendsList</div>  );
}
 
export default MyFriendsList;