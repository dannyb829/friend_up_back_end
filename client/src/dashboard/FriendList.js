import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";

function FriendList({ friendships = [], setIsModal, setModalContent, setUser, userGroups, setUserGroups }) {
  const friends_to_display = friendships.map((friendship) => {
    return (
      <FriendCard
        key={friendship.id}
        friendship={friendship}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
        userGroups={userGroups}
        setUserGroups={setUserGroups}
      />
    );
  });

  return <div className="gallery">{friends_to_display}</div>;
}

export default FriendList;
