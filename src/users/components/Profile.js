import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Profile.module.css';

import CirclePicFrame from '../../shared/components/ImageElements/CicrlePicFrame';

const Profile = props => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_card}>
                <div>
                    <Link to="/profiling">
                        <CirclePicFrame />
                    </Link>
                    
                </div>
              <p>Bohdan Yanechko</p>
            </div>
            <h1>Current goals in circles</h1>
            <h1>Match with mentor</h1>
            <h1>...</h1>
        </div>
    );
};

export default Profile;