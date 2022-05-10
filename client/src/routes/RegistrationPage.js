import React, { useState, useEffect } from "react";
import RegistrationForm from "../forms/RegistrationForm";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'

function RegistrationPage({user, setUser}) {

  const navigate = useNavigate()

  useEffect(()=>{
    if (user?.id){
      navigate('/')
    }
  },[user])

  return (
    <div>
      <h1>friendup</h1>
      <RegistrationForm setUser={setUser}/>
      <span>or</span>
      <Link to="/login">
        <button>log in to existing account</button>
      </Link>
    </div>
  );
}

export default RegistrationPage;
