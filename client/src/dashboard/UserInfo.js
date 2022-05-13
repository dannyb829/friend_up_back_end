import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import EditProfileForm from "../forms/EditProfileForm";

function UserInfo({ user, setUser, setIsModal, setModalContent }) {
  const { first_name = "", last_name = "", image_url = "" } = user;

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
    <div className="content-container page-container user-info">
      <div className="lr-cont">
        <h3 className="f-l">
          {first_name} {last_name}
        </h3>
        <button className="f-r link-button" onClick={handleEditProfileClick}>
          edit profile
        </button>
      </div>
      <hr />
      <div className="f-row">
        <Avatar image_url={image_url} />
        <div className="f-col">
          <h4>Contact</h4>
          <span>{user.email}</span>
          {user.phone_number ? <span>{user.phone_number}</span> : null}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
