import React, { useState, useEffect } from "react";
import Alert from "../friend/Alert";
import FriendProfile from "../friend/FriendProfile";
import InteractionHistory from "../friend/InteractionHistory";

function FriendPage(props) {
  return (
    <div>
      <Alert />
      <Alert />
      <FriendProfile />
      <InteractionHistory />
    </div>
  );
}

export default FriendPage;
