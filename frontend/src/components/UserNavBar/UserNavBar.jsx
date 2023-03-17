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
                            <b>User Game Page</b>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
     );
}
 
export default UserNavBar;