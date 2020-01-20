import React from 'react';
import styles from './Goal.module.css';

const Goal = props => {

    return(
    <div className={styles.toggle}>
        <label htmlFor={props.id} tabIndex={0}>
        <input id={props.id} type="checkbox" onClick={props.clickHandler} />
        <span className={styles.toggle__span}>{props.text}</span>
        </label>
    </div>
    );
};

export default Goal;