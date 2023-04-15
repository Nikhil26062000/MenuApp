import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <>
            <div className='nav'>
                <NavLink to="/breakfast" className='nav-tools' >BreakFast</NavLink>
                <NavLink to="/lunch" className='nav-tools'>Lunch</NavLink>
                <NavLink to="/evening" className='nav-tools'>Evening</NavLink>
                <NavLink to="/dinner" className='nav-tools'>Dinner</NavLink>
                <NavLink to="/" className='nav-tools'>All</NavLink>
            </div>
        </>
    )
}

export default NavBar;