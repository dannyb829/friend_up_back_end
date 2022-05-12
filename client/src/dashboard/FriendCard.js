import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactInfo from "./LastContactInfo";
import { Link, useNavigate } from "react-router";
import OptionsButton from "../structure/OptionsButton";

function FriendCard({ friendship }) {
  const navigate = useNavigate();

  const {
    friend: { first_name, image_url, id },
    status,
  } = friendship;

  const popupOptions = (
    <>
      <button onClick={() => navigate(`/friend/${id}`)}>view</button>
      <button>edit</button>
    </>
  );

  return (
    <div className={"content-container card " + status + "-card"}>
      <Avatar image_url={image_url} />
      <OptionsButton popupOptions={popupOptions} />
      <span>{first_name}</span>
      <LastContactInfo friendship={friendship} />
    </div>
  );
}

export default FriendCard;
