import React, { useState, useEffect } from "react";
import Alert from "../friend/Alert";
import FriendProfile from "../friend/FriendProfile";
import InteractionHistory from "../friend/InteractionHistory";
import { useParams } from "react-router-dom";

function FriendPage({ userInteractions, friendships = [] }) {
  const { id } = useParams();

  // const [friend ,setFriend] = useState({})

  const friendship =
    friendships.length > 0
      ? friendships.find((f) => f.friend.id === parseInt(id))
      : null;

  if (!friendship) {
    return <div>Loading...</div>;
  }

  function alertMessage(status, mode) {
    if (status === 'poor' || status === 'warning'){
      return <Alert status={status} mode={mode} name={friendship.friend.first_name}/>
    }
  }
 


  return (
    <div>
      {alertMessage(friendship.communication_status, 'communicate')}
      {alertMessage(friendship.meeting_status, 'meet')}
      <FriendProfile friendship={friendship} />
      <InteractionHistory userInteractions={userInteractions} friendId={friendship.friend.id} />
    </div>
  );
}

export default FriendPage;
