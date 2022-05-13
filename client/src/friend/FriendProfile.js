import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactControl from "./LastContactControl";
import FriendInfo from "./FriendInfo";
import OptionsButton from "../structure/OptionsButton";
import EditFriendForm from "../forms/EditFriendForm";

function FriendProfile({
  friendship = {},
  setIsModal,
  setModalContent,
  setUser,
  groups,
}) {
  const { friend } = friendship;
  const { image_url } = friend;
  const [isPopupUp, setIsPopupUp] = useState(false);
  const handleEditFriendClick = () => {
    setModalContent(
      <EditFriendForm
        friendship={friendship}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
        userGroups={groups}
      />
    );
    setIsModal(true);
    setIsPopupUp(false);
  };
  const popupOptions = (
    <>
      <button onClick={handleEditFriendClick}>edit</button>
    </>
  );
  return (
    <div className="content-container page-container profile">
      <Avatar image_url={image_url} />
      <OptionsButton
        popupOptions={popupOptions}
        isPopupUp={isPopupUp}
        setIsPopupUp={setIsPopupUp}
      />
      <FriendInfo friend={friend} />
    </div>
  );
}

export default FriendProfile;
