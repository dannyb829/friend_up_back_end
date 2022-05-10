import React, { useState, useEffect } from "react";
import FriendFilterForm from "../forms/FriendFilterForm";
import FriendList from "./FriendList";

function FriendGallery(props) {
  return (
    <div>
      <h3>Friends</h3>
      <button>➕ Add Friend</button>
      <button>✍️ Edit Groups</button>
      <FriendFilterForm />
      <FriendList />
    </div>
  );
}

export default FriendGallery;
