import React, { useState, useEffect } from "react";
import RegistrationForm from "../forms/RegistrationForm";
import { Link } from "react-router-dom";

function RegistrationPage(props) {
  return (
    <div>
      <h1>friendup</h1>
      <RegistrationForm />
      <span>or</span>
      <Link to="/login">
        <button>log in to existing account</button>
      </Link>
    </div>
  );
}

export default RegistrationPage;
