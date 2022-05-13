import React, { useState, useEffect } from "react";
import Header from "../structure/Header";
import UserInfo from "../dashboard/UserInfo";
import UpcomingInfo from "../dashboard/UpcomingInfo";
import FriendGallery from "../dashboard/FriendGallery";

function Dashboard({ user, setIsModal, setModalContent, setUser }) {
  return (
    <div>
      <UserInfo
        user={user}
        setUser={setUser}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
      />
      {/* <UpcomingInfo /> */}
      <FriendGallery
        friendships={user.friendships}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default Dashboard;
