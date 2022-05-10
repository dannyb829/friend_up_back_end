import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router'

function RegistrationForm({setUser}) {
  const defaultForm = {
    first_name: '',
    last_name: '',
    email:'',
    password:'',
    password_confirmation:''
  }

  const navigate = useNavigate()

  const [signUp ,setSignUp] = useState(defaultForm) 



  function handleSignUp(e) {
    e.preventDefault()
    fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUp)})
      .then(r => r.json())
      .then(data => {
        setUser(data)
        navigate('/')
      })
  }


  function handleSignUpChange(e) {
    setSignUp(prev => ({...prev, [e.target.name]: e.target.value}))
  }


  return (
    <form onSubmit={handleSignUp}>
      <label>
        first name
        <input onChange={handleSignUpChange} name="first_name" value={signUp.first_name}/>
      </label>
      <label>
        last name
        <input onChange={handleSignUpChange} name="last_name" value={signUp.last_name}/>
      </label>
      <label>
        email
        <input onChange={handleSignUpChange} name="email" value={signUp.email}/>
      </label>
      <label>
        password
        <input onChange={handleSignUpChange} type="password" name="password" value={signUp.password}/>
        <ul>
          <li>has 8 or more characters</li>
          <li>has both uppercase and lowercase letters</li>
          <li>has both letters and numbers</li>
          <li>has at least one special character</li>
        </ul>
      </label>
      <label>
        password confirmation
        <input onChange={handleSignUpChange} type="password" name="password_confirmation" value={signUp.password_confirmation}/>
        <ul>
          <li>matches password</li>
        </ul>
      </label>
      <button>submit</button>
    </form>
  );
}

export default RegistrationForm;
