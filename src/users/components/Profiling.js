import React, {useReducer} from 'react';

import styles from './Profiling.module.css';
import {VALIDATOR_REQUIRE} from '../../util/validators';
import Input from '../../shared/components/FormElements/Input';
import Goals from '../../goals/components/Goals';
import png from '../../images/e.svg';




const inputsReducer = (state, action) => {
    switch(action.type){
        case 'COLLECT':
        return{
            ...state,
            inputs: {
                ...state.inputs,
                [action.id]: {value: action.value, isValid: action.isValid} 
            }
        };
        case 'ANSWERS': {
            console.log(action.id)
            return {
                ...state,
                answers: [...state.answers, {id: action.id}]
            }
        }
        default: return state;
    }
}

const Profiling = props => {

    const [inputs, dispatch] = useReducer(inputsReducer, {
        inputs: {
            fname: {
                value: '',
                isValid: false
            },
            lname: {
                value: '',
                isValid: false
            }
        },
        answers: []
    })

    const inputsHandler = (id, value, isValid) => {
        dispatch({type: 'COLLECT', id: id, value: value, isValid: isValid})
        
    }

    const amswersHandler = (id) => {
        dispatch({type: 'ANSWERS', id: id}); 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <div className={styles.profiling}>
            <form className={styles.form_control}>
                <Input 
                    id="fname"
                    element="input" 
                    type="text" label="First Name" 
                    input_style={styles.nameInput_style}
                    error_style={styles.errorInput}
                    error_msg='Put some valid name'
                    alienInputsHandler={inputsHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                />
                <Input 
                    id="lname"
                    element="input" 
                    type="text" label="Last Name" 
                    input_style={styles.nameInput_style}
                    error_style={styles.errorInput}
                    error_msg='Put some valid last name'
                    alienInputsHandler={inputsHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                />
                
            </form>
            <div className={styles.subhead__goals_div}>
                <h3 className={styles.subhead__goals_text}>Let us know who you are</h3>
            </div>
            <Goals alienInputsHandler={amswersHandler}/>
    <button className={styles.button} onClick={submitHandler}>NEXT</button>

        <img src={png} alt='skajhdkhjda'/>
        </div>
    );
};

export default Profiling;