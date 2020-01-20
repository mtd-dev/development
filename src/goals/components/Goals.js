import React, {useReducer} from 'react';

import styles from './Goals.module.css';
import Goal from './Goal';


const answersReducer = (state, action) => {
    switch(action.type){
        case 'ACCEPT':
            //console.log(state)
            return {
                ...state,
                answers: [...state.answers, {id: action.id}] 
            };
        default: return state;
    }
}

const Goals = props => {

    const [, dispatch] = useReducer(answersReducer, {answers: []})

    const clickHandler = (event) =>{
        //console.log(event.target.id);
        props.alienInputsHandler(event.target.id);
        dispatch({type: 'ACCEPT', id: event.target.id})
    }


    return(
        <div className={styles.goals}>
            <Goal text="LEADERSHIP" id='leadership' clickHandler={clickHandler}/>
            <Goal text="DANCING" id='dancing' clickHandler={clickHandler}/>
            <Goal text="SPEAKING" id='speaking' clickHandler={clickHandler}/>
            <Goal text="DRIVING" id='driving' clickHandler={clickHandler}/>
            <Goal text="WORKOUT" id='workout' clickHandler={clickHandler}/>
        </div>
    );
};



export default Goals;
