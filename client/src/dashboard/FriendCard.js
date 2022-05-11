import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactInfo from "./LastContactInfo";
import { useNavigate } from 'react-router'

function FriendCard({ friendship }) {

  const navigate = useNavigate()

  const {
    friend: { first_name, image_url, id },
    status,
  } = friendship;

  return (
    <div className={"card " + status + "-container"} onClick={() => navigate(`/friend/${id}`)}>
      <Avatar image_url={image_url} />
      <button>edit</button>
      <span>{first_name}</span>
      <LastContactInfo friendship={friendship} />
    </div>
  );
}

export default FriendCard;
