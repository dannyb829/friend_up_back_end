import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import EditProfileForm from "../forms/EditProfileForm";

function UserInfo({ user, setUser, setIsModal, setModalContent }) {
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

  const handleEditProfileClick = () => {
    setModalContent(
      <EditProfileForm
        user={user}
        setUser={setUser}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
      />
    );
    setIsModal(true);
  };

  return (
    <div className="content-container page-container">
      <h3>
        {first_name} {last_name}
      </h3>
      <button onClick={handleEditProfileClick}>edit profile</button>
      <hr />
      <Avatar image_url={image_url} />
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

export default UserInfo;
