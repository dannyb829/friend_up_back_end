import React, { useState, useEffect } from "react";
import LastContactControl from "./LastContactControl";
import uuid from "react-uuid";

function FriendPreferences({ friendship = {} }) {
  return (
    <div className="page-container content-container flex-col">
      <h3>Your Friendship Preferences</h3>
      <div className="info-container">
        <ul>
          <li>
            Reminder to reach out every{" "}
            {friendship.communication_reminder_interval} days{" "}
          </li>
          <li>Reach out within {friendship.communication_max} days</li>
          <li>
            Reminder to get together every{" "}
            {friendship.meeting_reminder_interval} days
          </li>
          <li>Get together within {friendship.meeting_max}</li>
        </ul>
      </div>
      <h3>Groups</h3>
      <div className="info-container">
        <ul>
          {friendship.group_names.map((group) => (
            <li key={uuid()}>{group}</li>
          ))}
        </ul>
      </div>
      <LastContactControl friendship={friendship} />
    </div>
  );
}

export default FriendPreferences;
