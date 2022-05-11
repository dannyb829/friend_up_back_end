import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import FriendPage from "./routes/FriendPage";
import LoginPage from "./routes/LoginPage";
import RegistrationPage from "./routes/RegistrationPage";
import Header from "./structure/Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Modal from "./structure/Modal";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isModal, setIsModal] = useState(true);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/auth").then((r) =>
      r.ok
        ? r.json().then((data) => {
            console.log(data);
            setUser(data);
          })
        : navigate("/login")
    );
  }, []);
  // TODO: have dashboard reroute to LoginPage if not logged in
  // TODO: have friend page index into specific friend

  return (
    <>
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
          <Route path="/friend" element={<FriendPage />} />
        </Routes>
        {isModal && <Modal content={modalContent} setIsModal={setIsModal} />}
      </div>
      {user?.id ? <Header setUser={setUser} /> : null}
    </>
  );
}

export default App;
