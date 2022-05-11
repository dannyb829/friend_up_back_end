import React, { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function LoginPage({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="page-centered flex-col">
      <h1 className="title">friendup</h1>
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default LoginPage;
