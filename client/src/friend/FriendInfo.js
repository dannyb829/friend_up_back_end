import React, { useState, useEffect } from "react";

function FriendInfo({ friend }) {
  const { first_name, last_name, description, email, phone_number } = friend;

  return (
    <div className="f-col">
      <h2>
        {first_name} {last_name}
      </h2>
      <div className="info-container f-col">
        <span>
          <b>Info:</b> {description}
        </span>
        <hr />
        <span>
          <b>Email:</b> {email}
        </span>
        <span>
          <b>Phone:</b> {phone_number}
        </span>
      </div>
    </div>
  );
}

export default FriendInfo;
