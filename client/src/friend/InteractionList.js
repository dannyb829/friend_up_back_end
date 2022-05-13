import React, { useState, useEffect } from "react";
import InteractionListItem from "./InteractionListItem";

function InteractionList({
  userInteractions,
  friendId,
  setUser,
  setModalContent,
  setIsModal,
  friend,
}) {
  const interactions = userInteractions.filter(
    (int) => int.friend_id === friendId
  );
  const displayInteractions = interactions.map((int) => (
    <InteractionListItem
      key={int.id}
      interaction={int}
      setUser={setUser}
      setModalContent={setModalContent}
      setIsModal={setIsModal}
      friend={friend}
    />
  ));

  return <div>{displayInteractions}</div>;
}

export default InteractionList;
