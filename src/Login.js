import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [{user},dispatch] = useStateValue();
  const signIn=()=>{
//sign in
auth
.signInWithPopup(provider)
.then(result => {

  dispatch({
    type:actionTypes.SET_USER,
    user:result.user,
  })
})
.catch((error)=>alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" 
      alt="fb icon"/>
      <img
      className="fbname"
      src="https://www.svgrepo.com/show/303685/facebook-5-logo.svg"
      alt="facebook"/>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
      
    </div>
  )
}

export default Login
