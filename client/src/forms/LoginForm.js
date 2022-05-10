import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

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
            console.log(data);
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
    <form onSubmit={handleLogin}>
      <input
        onChange={handleLoginChange}
        type="text"
        name="email"
        value={login.email}
        placeholder="EMAIL"
      />
      <input
        onChange={handleLoginChange}
        type="password"
        name="password"
        value={login.password}
        placeholder="PASSWORD"
      />
      <a href="#">forgot password?</a>
      <button>log in</button>
    </form>
  );
}

export default LoginForm;
