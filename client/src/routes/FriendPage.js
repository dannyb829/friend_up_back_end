import React, { useState, useEffect } from "react";
import Alert from "../friend/Alert";
import FriendProfile from "../friend/FriendProfile";
import InteractionHistory from "../friend/InteractionHistory";
import { useParams } from "react-router-dom";

function FriendPage(props) {
  const [friend ,setFriend] = useState({}) 
 
  const { id } = useParams()

  useEffect(()=> {
    fetch(`/friends/${id}`)
    .then(r => r.json())
    .then(friend => setFriend(friend))
  },[])



  return (
    <div>
      <Alert />
      <Alert />
      <FriendProfile friend={friend}/>
      <InteractionHistory />
    </div>
  );
}

export default FriendPage;
