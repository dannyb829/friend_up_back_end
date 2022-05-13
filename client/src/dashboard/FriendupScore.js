import React, { useState, useEffect } from "react";

function FriendupScore({ user }) {
  const { friendships = [], friends_needing_attention = 0 } = user;

  const friendupScore = parseInt(
    ((friendships.length - friends_needing_attention) / friendships.length) *
      100
  );

  let scoreClass = "";

  switch (true) {
    case friendupScore >= 66:
      scoreClass = "good";
      break;
    case friendupScore >= 33:
      scoreClass = "warn";
      break;
    case friendupScore < 33:
      scoreClass = "poor";
      break;
  }

  return (
    <div className="content-container page-container">
      <h3>Friendup Score</h3>
      <hr />
      <div className="f-center score-container">
        <span className={"score score-" + scoreClass}>{friendupScore}%</span>
        <div className="f-col fit-width">
          <span>{friendships.length} friendships</span>
          <span>{friends_needing_attention} need attention</span>
        </div>
      </div>
    </div>
  );
}

export default FriendupScore;
