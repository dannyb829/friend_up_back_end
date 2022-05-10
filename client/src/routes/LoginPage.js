import React, { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'

function LoginPage({user, setUser}) {

  const navigate = useNavigate()

  useEffect(()=>{
    if (user?.id){
      navigate('/')
    }
  },[user])

  return (
    <div>
      <h1>friendup</h1>
      <LoginForm setUser={setUser}/>
      <Link to="/register">
        <button>create new account</button>
      </Link>
    </div>
  );
}

export default LoginPage;
