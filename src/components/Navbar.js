import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return ( 
        <div className='Navbar'>
            <div className='Navbar__logo'>
                BETTER-ME
            </div>
            <div className='Navbar__links'>
                <Link to="/">Home</Link>
                <Link to="/exercise">Exercise</Link>
                <Link to="/sleep">Sleep</Link>
                <Link to="/food">Food</Link>
                <Link to="/discord">Discord</Link>
            </div>
        </div>
     );
}

export default Navbar;