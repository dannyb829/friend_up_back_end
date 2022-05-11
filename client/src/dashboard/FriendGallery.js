import React, { useState, useEffect } from "react";
import FriendFilterForm from "../forms/FriendFilterForm";
import FriendList from "./FriendList";

function FriendGallery({ friendships }) {
  return (
    <div className="content-container page-container">
      <h3>Friends</h3>
      <button>➕ Add Friend</button>
      <button>✍️ Edit Groups</button>
      <FriendFilterForm />
      <hr />
      <FriendList friendships={friendships} />
    </div>
  );
}

export default FriendGallery;
