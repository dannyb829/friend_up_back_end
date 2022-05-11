import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";

function FriendList({ friendships = [] }) {
  const friends_to_display = friendships.map((friendship) => {
    console.log(friendship);
    return <FriendCard key={friendship.id} friendship={friendship} />;
  });
  console.log(friends_to_display);

  return <div>{friends_to_display}</div>;
}

export default FriendList;
