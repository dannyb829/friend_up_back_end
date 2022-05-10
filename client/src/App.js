import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import FriendPage from "./routes/FriendPage";
import LoginPage from "./routes/LoginPage";
import RegistrationPage from "./routes/RegistrationPage";
import Header from "./structure/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // TODO: have dashboard reroute to LoginPage if not logged in
  // TODO: have friend page index into specific friend

  return (
    <>
      {loggedIn && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/friend" element={<FriendPage />} />
      </Routes>
    </>
  );
}

export default App;
