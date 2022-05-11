import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactControl from "./LastContactControl";
import FriendInfo from "./FriendInfo";

function FriendProfile(props) {
  return (
    <div className="content-container page-container">
      <Avatar />
      <button>edit</button>
      <FriendInfo />
      <LastContactControl />
    </div>
  );
}

export default FriendProfile;
