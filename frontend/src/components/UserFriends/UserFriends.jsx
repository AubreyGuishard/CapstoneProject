import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const UserFriends = ({attendee}) => {
    const [user, token] = useAuth();
    const [followers, setFollowers] = useState(false);
    const [playerFollowers, setPlayerFollowers] = useState();
    const navigate = useNavigate()



    return ( <div>Close Friends</div>  );
}
 
export default UserFriends;