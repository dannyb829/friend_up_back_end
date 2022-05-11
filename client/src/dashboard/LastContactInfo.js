import React, { useState, useEffect } from "react";

function LastContactInfo({ friendship }) {
  const {
    days_since_communication,
    days_since_meeting,
    communication_status,
    meeting_status,
  } = friendship;
  return (
    <div>
      <span>🗣</span>
      <span className={communication_status + "-font"}>
        {days_since_communication} days ago
      </span>
      <hr></hr>
      <span>📍</span>
      <span className={meeting_status + "-font"}>
        {days_since_meeting} days ago
      </span>
    </div>
  );
}

export default LastContactInfo;
