import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactInfo from "./LastContactInfo";

function FriendCard(props) {
  return (
    <div className="card">
      <Avatar />
      <button>edit</button>
      <span>Name</span>
      <LastContactInfo />
    </div>
  );
}

export default FriendCard;
