import React, { useState, useEffect } from "react";
import FriendFilterForm from "../forms/FriendFilterForm";
import FriendList from "./FriendList";
import AddFriendForm from "../forms/AddFriendForm";

function FriendGallery({ friendships, setIsModal, setModalContent, groups, setUser, setGroups }) {
  const handleAddFriendClick = () => {
    setModalContent(<AddFriendForm usergroups={groups} setUser={setUser} setIsModal={setIsModal} setModalContent={setModalContent}/>);
    setIsModal(true);
  };

  return (
    <div className="content-container page-container">
      <h3>Friends</h3>
      <button onClick={handleAddFriendClick}>➕ Add Friend</button>
      <button>✍️ Edit Groups</button>
      <FriendFilterForm />
      <hr />
      <FriendList
        friendships={friendships}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
        userGroups={groups}
        setUserGroups={setGroups}
      />
    </div>
  );
}

export default FriendGallery;
