import React, { useState, useEffect } from "react";
import Header from "../structure/Header";
import UserInfo from "../dashboard/UserInfo";
import UpcomingInfo from "../dashboard/UpcomingInfo";
import FriendGallery from "../dashboard/FriendGallery";

function Dashboard(props) {
  return (
    <div>
      <UserInfo />
      <UpcomingInfo />
      <FriendGallery />
    </div>
  );
}

export default Dashboard;
