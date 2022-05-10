import React, { useState, useEffect } from "react";
import Avatar from "../structure/Avatar";

function UserInfo(props) {
  return (
    <div>
      <h3>First Last</h3>
      <a href="#">edit profile</a>
      <Avatar />
      <span>friendup score:</span>
      <span>100%</span>
      <span>10 friendships</span>
      <span>5 need attention</span>
    </div>
  );
}

export default UserInfo;
