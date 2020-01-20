import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './NavLinks.module.css';

const NavLinks = props => {
    return(
        <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
                <NavLink exact to="/profile">PROFILE</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;