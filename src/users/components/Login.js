import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.css';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        padding: '1rem 0 '
      },
    },
  }));

  
const inputsReducer = (state, action) => {
    switch(action.type) {
        case 'COLLECT': 
        //console.log(state)
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.id]:  action.value
            },
            isTouched: true
        }
    }
}

const Login = props => {
    const classes = useStyles();

    const [inputState, dispatch] = useReducer(inputsReducer, {
        inputs: {email: '', password: '', passwordConf: ''},
        isTouched: false
    });

    const inputsHandler = (event) => {
        //console.log(event.target.value, event.target.id);
        dispatch({type: 'COLLECT', id: event.target.id, value: event.target.value})
    }

    const [state, setChecked] = React.useState({checkedA: true});

    const handleChange = checkedState => {
        console.log(checkedState)
      setChecked({...state, checkedA: !checkedState});
    };

    const registrationHandler = () => {
        console.log(inputState);
    }

    const disableButton =  ((
        inputState.inputs.email && 
        inputState.inputs.email.length > 3 &&
        inputState.inputs.password && 
        inputState.inputs.password === inputState.inputs.passwordConf) ? false : true); 

    return(
        <div className={styles.login}>
            <h3>Create Account</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="email" 
                        label="Email" 
                        onChange={inputsHandler} 
                        />
                <TextField 
                        id="password" 
                        label="Password" 
                        type="password"
                        onChange={inputsHandler}
                        />
                <TextField 
                        id="passwordConf" 
                        label="Confirm Password" 
                        type="password"
                        onChange={inputsHandler}/>
            </form>
            <div className={styles.checkBox}>
                <label htmlFor={props.id} tabIndex={0} className={styles.label}>
                        <input id={props.id} type="checkbox" onClick={() => handleChange(state.checkedA)}/>
                        <span className={styles.toggle__span}>I accept the <Link to='/'>Terms and Conditions</Link></span>
                </label>
            </div>
            <button className={styles.button} disabled={disableButton} onClick={registrationHandler}>REGISTER</button>
        </div>

        
    );
};

export default Login;