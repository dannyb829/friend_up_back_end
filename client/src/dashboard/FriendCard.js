import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";
import LastContactInfo from "./LastContactInfo";
import { Link, useNavigate } from "react-router";
import OptionsButton from "../structure/OptionsButton";
import EditFriendForm from "../forms/EditFriendForm";

function FriendCard({ friendship, setIsModal, setModalContent, setUser, userGroups, setUserGroups }) {
  const [isPopupUp, setIsPopupUp] = useState(false);

  const navigate = useNavigate();

  const {
    friend: { first_name, image_url, id },
    status,
  } = friendship;

  const handleEditFriendClick = () => {
    setModalContent(<EditFriendForm friendship={friendship} 
                                    setIsModal={setIsModal} 
                                    setModalContent={setModalContent}
                                    setUser={setUser}
                                    userGroups={userGroups}
                                    setUserGroups={setUserGroups}
                                    />);
    setIsModal(true);
    setIsPopupUp(false);
  };

  const popupOptions = (
    <>
      <button onClick={() => navigate(`/friend/${id}`)}>view</button>
      <button onClick={handleEditFriendClick}>edit</button>
    </>
  );

  return (
    <div className={"content-container card " + status + "-card"}>
      <div onClick={() => navigate(`/friend/${id}`)}>
        <Avatar image_url={image_url} />
      </div>
      <OptionsButton
        popupOptions={popupOptions}
        isPopupUp={isPopupUp}
        setIsPopupUp={setIsPopupUp}
      />
      <span>{first_name}</span>
      <LastContactInfo friendship={friendship} />
    </div>
  );
}

export default FriendCard;
