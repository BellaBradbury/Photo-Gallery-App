// dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// main site navigation, only nav buttons
const MainNav = props => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/piano">Piano</NavLink></li>
                <li><NavLink to="/guitar">Guitar</NavLink></li>
                <li><NavLink to="/drums">Drums</NavLink></li>
            </ul>
        </nav>
    );
};

export default MainNav;