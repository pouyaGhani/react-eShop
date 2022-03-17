import React, { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const passwordChangeHandler = (e) =>{
      setPassword(e.target.value);
  }
  const emailChangeHandler = (e) =>{
      setEmail(e.target.value);
  }

  const signInHandler = (e) => {
      e.preventDefault();
      
      auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/');
        })
        .catch(error => alert(error.message));
  }

  const registerHandler = (e) =>{
    e.preventDefault();
      
    auth
      .createUserWithEmailAndPassword(email,password)
      .then(auth => {
          if(auth){
            navigate('/');
          }
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <div className="eshop-logo"></div>
      <form className="form-container">
        <h2 className="sign-in">Sign in</h2>
        <div className="email-container">
          <label htmlFor="email">E-mail</label>
          <input type={"email"} id="email" onChange={emailChangeHandler}></input>
        </div>

        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input type={"password"} id="password" onChange={passwordChangeHandler}></input>
        </div>

        <button type="submit" onClick={signInHandler} className="signin-button">
          Sign in
        </button>
        <small className="privacy">
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
        <buttton className="register-button" onClick={registerHandler}>Creat Your eShop Account</buttton>
      </form>
    </div>
  );
}

export default Login;
