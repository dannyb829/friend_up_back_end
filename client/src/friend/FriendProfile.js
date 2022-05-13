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
  console.log(friendship.group_names, 'friend profile')
  return (
    <div className="content-container page-container profile">
      <Avatar image_url={image_url} />
      <OptionsButton
        popupOptions={popupOptions}
        isPopupUp={isPopupUp}
        setIsPopupUp={setIsPopupUp}
      />
      <div className='content-container'>
        <h3>Friend Preferences</h3>
        <hr />
        <h5>Reminder to reach out every {friendship.communication_reminder_interval} days </h5>
        <h5>Reach out within {friendship.communication_max} days</h5>
        <h5>Reminder to get together every {friendship.meeting_reminder_interval} days</h5>
        <h5>Get together within {friendship.meeting_max}</h5>
        <hr />
        <h3>Groups</h3>
        {friendship.group_names.map(group => <h5>{group}</h5>)}
      </div>
      <FriendInfo friend={friend} />
      <LastContactControl friendship={friendship} />
    </div>
  );
}

export default FriendProfile;
