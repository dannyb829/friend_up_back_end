import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";

function FriendList({ friendships = [] }) {
  const friends_to_display = friendships.map((friendship) => {
    return <FriendCard key={friendship.id} friendship={friendship} />;
  });

  return <div>{friends_to_display}</div>;
}

export default FriendList;
