import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
const UserNavBar = () => {
    

    return ( 
        <div className='userNavBar'>
            <ul>
                <li className='Home'>
                    <Link to="/">
                        <b>Home</b>
                    </Link>

                </li>
            </ul>
            <ul>
                <li className='postgame'>
                    <Link to="/postgame">
                        <b>Post Game</b>
                    </Link>

                </li>
            </ul>
            <div>
                <ul>
                    <li  className='userGames'>
                        <Link to="/yourgames">
                            <b>My Games</b>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='myFriends'>
                        <Link to="/myfriends">
                            <b>My Friends</b>
                        </Link>

                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='myCalendar'>
                        <Link to="mycalendar">
                            <b>My Calendar</b>
                        </Link>

                    </li>
                </ul>
            </div>

        </div>
     );
}
 
export default UserNavBar;