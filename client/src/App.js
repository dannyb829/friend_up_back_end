import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import FriendPage from "./routes/FriendPage";
import LoginPage from "./routes/LoginPage";
import RegistrationPage from "./routes/RegistrationPage";
import Header from "./structure/Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userInteractions ,setUserInteractions] = useState([]) 

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/auth").then((r) =>
      r.ok
        ? r.json().then((data) => {
            console.log(data);
            setUser(data);
            getUserInteractions()
          })
        : navigate("/login")
    );
  }, []);
  // TODO: have dashboard reroute to LoginPage if not logged in
  // TODO: have friend page index into specific friend

  function getUserInteractions() {
    fetch('/interactions')
    .then(r => r.json())
    .then(interactions => setUserInteractions(interactions))
  }



  return (
    <>
      {user?.id ? <Header setUser={setUser} /> : null}
      <div className={user?.id ? "header-shift" : null}>
        <Routes>
          <Route path="/" element={<Dashboard user={user} />} />
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<RegistrationPage user={user} setUser={setUser} />}
          />
          <Route path="/friend/:id" element={<FriendPage userInteractions={userInteractions} friendships={user.friendships}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
