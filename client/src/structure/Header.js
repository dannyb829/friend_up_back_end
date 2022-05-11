import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Header({ setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    fetch("/logout", { method: "DELETE" });
    setUser({});
    navigate("/login");
  }

  return (
    <div className="header">
      <Link to="/">
        <span>friendup</span>
      </Link>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
}

export default Header;
