import React, { useState, useEffect } from "react";
import FriendFilterForm from "../forms/FriendFilterForm";
import FriendList from "./FriendList";
import AddFriendForm from "../forms/AddFriendForm";

// Default Filter Values
const defaultFilter = {
  searchInput: "",
  groupFilter: "",
  isShowPoor: true,
  isShowWarning: true,
  isShowGood: true,
  typeFilter: "either",
};

function FriendGallery({ friendships, setIsModal, setModalContent, groups }) {
  const [filterData, setFilterData] = useState(defaultFilter);
  const {
    searchInput,
    groupFilter,
    isShowPoor,
    isShowWarning,
    isShowGood,
    typeFilter,
  } = filterData;

  if (!friendships) {
    return <div>Loading...</div>;
  }

  const searchRegex = new RegExp(searchInput, "i");

  const friendshipsToDisplay = friendships
    .filter(
      (f) =>
        f.friend.first_name.match(searchRegex) ||
        f.friend.last_name.match(searchRegex)
    )
    .filter((f) => (groupFilter ? f.group_names.includes(groupFilter) : true))
    .filter((f) =>
      typeFilter === "either"
        ? !isShowPoor
          ? f.status !== "poor"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "either"
        ? !isShowWarning
          ? f.status !== "warning"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "either"
        ? !isShowGood
          ? f.status !== "good"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "communicate"
        ? !isShowPoor
          ? f.communication_status !== "poor"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "communicate"
        ? !isShowWarning
          ? f.communication_status !== "warning"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "communicate"
        ? !isShowGood
          ? f.communication_status !== "good"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "visit"
        ? !isShowPoor
          ? f.meeting_status !== "poor"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "visit"
        ? !isShowWarning
          ? f.meeting_status !== "warning"
          : true
        : true
    )
    .filter((f) =>
      typeFilter === "visit"
        ? !isShowGood
          ? f.meeting_status !== "good"
          : true
        : true
    );

  const handleAddFriendClick = () => {
    setModalContent(<AddFriendForm usergroups={groups} />);
    setIsModal(true);
  };

  return (
    <div className="content-container page-container">
      <h3>Friends</h3>
      <button onClick={handleAddFriendClick}>➕ Add Friend</button>
      <button>✍️ Edit Groups</button>
      <FriendFilterForm formData={filterData} setFormData={setFilterData} />
      <hr />
      <FriendList
        friendships={friendshipsToDisplay}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
      />
    </div>
  );
}

export default FriendGallery;
