import React, { useState, useEffect } from "react";
import RegistrationForm from "../forms/RegistrationForm";
import { useNavigate } from "react-router";

function RegistrationPage({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="page-centered flex-col">
      <h1 className="title">friendup</h1>
      <RegistrationForm setUser={setUser} />
    </div>
  );
}

export default RegistrationPage;
