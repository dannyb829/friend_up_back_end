import React, { useState, useEffect } from "react";
import Alert from "../friend/Alert";
import FriendProfile from "../friend/FriendProfile";
import InteractionHistory from "../friend/InteractionHistory";
import { useParams } from "react-router-dom";

function FriendPage({userInteractions, friendships =[]}) {

  const {id} = useParams()

  
  
  // const [friend ,setFriend] = useState({}) 
  
  const friendship = friendships.length > 0 ? friendships.find(f => f.friend.id === parseInt(id)) : null;
  

    console.log('friend page BLARGG',friendship)

  if (!friendship) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <Alert />
      <Alert />
      <FriendProfile friendship={friendship} />
      <InteractionHistory userInteractions={userInteractions} friendId={8}/>
    </div>
  );
}

export default FriendPage;
