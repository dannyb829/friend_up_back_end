import React, { useState, useEffect } from "react";
import Alert from "../friend/Alert";
import FriendProfile from "../friend/FriendProfile";
import InteractionHistory from "../friend/InteractionHistory";
import { useParams } from "react-router-dom";
import LoadingPage from "../utility/LoadingPage";
import Error404 from "../utility/Error404";

function FriendPage({
  userInteractions,
  friendships,
  setIsModal,
  setModalContent,
  setUser,
  groups,
}) {
  const { id } = useParams();

  if (!friendships || friendships.length === 0) {
    return <LoadingPage />;
  }

  const friendship = friendships.find((f) => f.friend.id === parseInt(id));

  if (!friendship) {
    return <Error404 />;
  }

  function alertMessage(status, mode) {
    if (status === "poor" || status === "warning") {
      return (
        <Alert
          status={status}
          mode={mode}
          name={friendship.friend.first_name}
        />
      );
    }
  }

  return (
    <div>
      {alertMessage(friendship.communication_status, "communicate")}
      {alertMessage(friendship.meeting_status, "meet")}
      <FriendProfile
        friendship={friendship}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
        groups={groups}
      />
      <InteractionHistory
        userInteractions={userInteractions}
        friend={friendship.friend}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
      />
    </div>
  );
}

export default FriendPage;
