import React, {useReducer, useEffect} from 'react';

import {validate } from '../../../util/validators';


const inputReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators),
            };
        case 'TOUCHED':
            return {
                ...state,
                isTouched: action.isTouched
            }
        default: return state;
    }
};



const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false, style: props.input_style, isTouched: false });

     useEffect(() => {
        props.alienInputsHandler(props.id, inputState.value, inputState.isValid)
     }, [inputState.value, inputState.isValid])

    const errorStyle = (!inputState.isValid && inputState.isTouched) ? { background: 'red'} : {background: 'white'}; 

    const changeHandler = event => {
        dispatch({type: 'CHANGE', value: event.target.value,validators: props.validators} );
    };

    const touchHandler = event => {
        dispatch({type: 'TOUCHED', isTouched: true})
    }

    const element = props.element === 'input'
    ? 
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        style={errorStyle}
    /> 
    :
    <textarea 
        id={props.id} 
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
    />

    return (
        <div className={inputState.style}>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            {element}
        </div>
    );
};

export default Input;