import React, { useState, useEffect } from "react";
import Alert from "../friend/Alert";
import FriendProfile from "../friend/FriendProfile";
import InteractionHistory from "../friend/InteractionHistory";
import { useParams } from "react-router-dom";

function FriendPage({
  userInteractions,
  friendships = [],
  setIsModal,
  setModalContent,
}) {
  const { id } = useParams();

  // const [friend ,setFriend] = useState({})

  const friendship =
    friendships.length > 0
      ? friendships.find((f) => f.friend.id === parseInt(id))
      : null;

  if (!friendship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Alert />
      <Alert />
      <FriendProfile
        friendship={friendship}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
      />
      <InteractionHistory
        userInteractions={userInteractions}
        friendId={friendship.friend.id}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
      />
    </div>
  );
}

export default FriendPage;
