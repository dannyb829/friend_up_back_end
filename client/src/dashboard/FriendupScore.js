import React, { useState, useEffect } from "react";

function FriendupScore({ user }) {
  const { friendships = [], friends_needing_attention = 0 } = user;

  const friendupScore = parseInt(
    ((friendships.length - friends_needing_attention) / friendships.length) *
      100
  );
  return (
    <div className="content-container page-container">
      <span>
        <b>Friendup score:</b>
      </span>
      <span>{friendupScore}%</span>
      <span>
        {" "}
        {friendships.length} <b>friendships</b>
      </span>
      <span>
        {" "}
        {friends_needing_attention} <b>need attention</b>
      </span>
    </div>
  );
}

export default FriendupScore;
