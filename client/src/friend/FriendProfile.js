import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactControl from "./LastContactControl";
import FriendInfo from "./FriendInfo";

function FriendProfile({ friendship = {} }) {
  const { friend } = friendship;
  const { image_url } = friend;

  return (
    <div className="content-container page-container">
      <Avatar image_url={image_url} />
      <button>edit</button>
      <FriendInfo friend={friend} />
      <LastContactControl friendship={friendship} />
    </div>
  );
}

export default FriendProfile;
