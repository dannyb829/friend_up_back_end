import React, { useState, useEffect } from "react";
import Header from "../structure/Header";
import UserInfo from "../dashboard/UserInfo";
import UpcomingInfo from "../dashboard/UpcomingInfo";
import FriendGallery from "../dashboard/FriendGallery";
import FriendupScore from "../dashboard/FriendupScore";
import LoadingPage from "../utility/LoadingPage";

function Dashboard({ user, setIsModal, setModalContent, setUser }) {
  if (!user) {
    return <LoadingPage />;
  }

  return (
    <div className="flex-col">
      <div>
        <UserInfo
          user={user}
          setUser={setUser}
          setIsModal={setIsModal}
          setModalContent={setModalContent}
        />
        <FriendupScore user={user} />
      </div>
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
