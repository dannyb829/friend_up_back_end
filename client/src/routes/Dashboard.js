import React, { useState, useEffect } from "react";
import Header from "../structure/Header";
import UserInfo from "../dashboard/UserInfo";
import UpcomingInfo from "../dashboard/UpcomingInfo";
import FriendGallery from "../dashboard/FriendGallery";

function Dashboard({ user, setIsModal, setModalContent, groups }) {
  return (
    <div>
      <UserInfo user={user} />
      <UpcomingInfo />
      <FriendGallery
        friendships={user.friendships}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        groups={groups}
      />
    </div>
  );
}

export default Dashboard;
