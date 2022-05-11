import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";

function UserInfo({ user }) {
  const {
    first_name = "",
    last_name = "",
    image_url = "",
    friendships = [],
    friends_needing_attention = 0,
  } = user;

  const friendupScore = parseInt(
    (friends_needing_attention / friendships.length) * 100
  );

  return (
    <div className="content-container page-container">
      <h3>
        {first_name} {last_name}
      </h3>
      <a href="#">edit profile</a>
      <hr />
      <Avatar image_url={image_url} />
      <span>friendup score:</span>
      <span>{friendupScore}%</span>
      <span>{friendships.length} friendships</span>
      <span>{friends_needing_attention} need attention</span>
    </div>
  );
}

export default UserInfo;
