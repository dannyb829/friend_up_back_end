import React, { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";

function LoginPage(props) {
  return (
    <div>
      <h1>friendup</h1>
      <LoginForm />
      <Link to="/register">
        <button>create new account</button>
      </Link>
    </div>
  );
}

export default LoginPage;
