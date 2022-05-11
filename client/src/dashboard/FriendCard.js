import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactInfo from "./LastContactInfo";

function FriendCard({ friendship }) {

  const {
    friend: { first_name, image_url },
    status,
  } = friendship;

  return (
    <div className={"card " + status + "-container"}>
      <Avatar image_url={image_url} />
      <button>edit</button>
      <span>{first_name}</span>
      <LastContactInfo friendship={friendship} />
    </div>
  );
}

export default FriendCard;
