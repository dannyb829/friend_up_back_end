import React, { useState, useEffect } from "react";

function FriendInfo({friend}) {

  const { first_name, last_name, email, phone_number, description } = friend

  return (
    <div>
      <span>{first_name} {last_name}</span>
      <span>{description}</span>
      <hr />
      <span>{email}</span>
      <span>{phone_number}</span>
    </div>
  );
}

export default FriendInfo;
