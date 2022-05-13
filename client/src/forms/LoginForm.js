import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function LoginForm({ setUser }) {
  const [login, setLogin] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    }).then((r) =>
      r.ok
        ? r.json().then((data) => {
            setUser(data);
            navigate("/");
          })
        : r.json().then((data) => alert(data.error))
    );
  }

  function handleLoginChange(e) {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form onSubmit={handleLogin} className="flex-col login">
      <input
        onChange={handleLoginChange}
        type="text"
        name="email"
        value={login.email}
        placeholder="Email"
      />
      <input
        onChange={handleLoginChange}
        type="password"
        name="password"
        value={login.password}
        placeholder="Password"
      />
      <a href="#">forgot password?</a>
      <button className="btn">log in</button>
      <Link to="/register">
        <button className="btn2">create new account</button>
      </Link>
    </form>
  );
}

export default LoginForm;
