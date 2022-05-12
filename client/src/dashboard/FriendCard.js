import React, { useState } from "react";
import Avatar from "../structure/Avatar";
import LastContactInfo from "./LastContactInfo";
import { useNavigate } from "react-router";
import OptionsButton from "../structure/OptionsButton";
import EditFriendForm from "../forms/EditFriendForm";
import AddInteractionForm from "../forms/AddInteractionForm";

function FriendCard({
  friendship,
  setIsModal,
  setModalContent,
  setUser,
  groups,
}) {
  const [isPopupUp, setIsPopupUp] = useState(false);

  const navigate = useNavigate();

  const {
    friend: { first_name, image_url, id },
    status,
  } = friendship;

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

  const handleAddInteractionClick = () => {
    setModalContent(
      <AddInteractionForm
        friendId={friendship.friend.id}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
      />
    );
    setIsModal(true);
    setIsPopupUp(false);
  };

  const popupOptions = (
    <>
      <button onClick={() => navigate(`/friend/${id}`)}>view</button>
      <button onClick={handleEditFriendClick}>edit</button>
      <button onClick={handleAddInteractionClick}>log new</button>
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
