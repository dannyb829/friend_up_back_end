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
  // const [userInteractions, setUserInteractions] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  // const [groups, setGroups] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/auth").then((r) =>
      r.ok
        ? r.json().then((data) => {
            setUser(data);
            // getUserInteractions();
            // getGroups();
          })
        : navigate("/login")
    );
  }, []);
  // TODO: have dashboard reroute to LoginPage if not logged in
  // TODO: have friend page index into specific friend

  // function getUserInteractions() {
  //   fetch("/interactions")
  //     .then((r) => r.json())
  //     .then((interactions) => setUserInteractions(interactions));
  // }

  // function getGroups() {
  //   fetch("/groups")
  //     .then((resp) => resp.json())
  //     .then((data) => setGroups(data));
  // }

  return (
    <>
      <div className={user?.id ? "header-shift" : null}>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                user={user}
                setUser={setUser}
                setIsModal={setIsModal}
                setModalContent={setModalContent}
                groups={user.groups}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                user={user}
                setUser={setUser}
                setIsModal={setIsModal}
                setModalContent={setModalContent}
              />
            }
          />
          <Route
            path="/register"
            element={<RegistrationPage user={user} setUser={setUser} />}
          />
          <Route
            path="/friend/:id"
            element={
              <FriendPage
                userInteractions={user.interactions}
                friendships={user.friendships}
                setIsModal={setIsModal}
                setModalContent={setModalContent}
                setUser={setUser}
              />
            }
          />
        </Routes>
        {isModal && (
          <Modal
            content={modalContent}
            setIsModal={setIsModal}
            setModalContent={setModalContent}
          />
        )}
      </div>
      {user?.id ? <Header setUser={setUser} /> : null}
    </>
  );
}

export default App;
