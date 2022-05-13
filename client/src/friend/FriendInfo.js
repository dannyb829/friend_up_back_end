import React, { useState, useEffect } from "react";

function FriendInfo({ friend }) {
  const { first_name, last_name, description, email, phone_number } = friend;

  return (
    <div className="content-container">
      <span>
      <b>Name:</b>  {first_name} {last_name}
      </span><br></br>
      <span><b>Info:</b> {description}</span>
      <hr />
      <span><b>Email:</b> {email}</span><br></br>
      <span><b>Phone:</b> {phone_number}</span>
    </div>
  );
}

export default FriendInfo;
