// import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";

function FriendList({ friendships = [], setIsModal, setModalContent }) {
  const friends_to_display = friendships.map((friendship) => {
    return (
      <FriendCard
        key={friendship.id}
        friendship={friendship}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
      />
    );
  });

  return <div className="gallery">{friends_to_display}</div>;
}

export default FriendList;
