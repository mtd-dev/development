import React from 'react';
import {Link} from 'react-router-dom';

import styles from './MainNavigation.module.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import logo from '../../../images/mtdLogo.svg';

const MainNavigation = props => {
    return (
        <MainHeader >
            <h1 className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt='logo' />
                </Link>
            </h1>
            <NavLinks/>
        </MainHeader>
    );
};

export default MainNavigation;
