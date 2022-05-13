import React, { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { ImBubbles4 } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa";

function LastContactInfo({ friendship }) {
  const {
    last_communication_date,
    last_meeting_date,
    communication_status,
    meeting_status,
  } = friendship;

  console.log(
    friendship.friend.first_name,
    "last-comm:",
    last_communication_date
  );
  console.log(friendship.friend.first_name, "last-meet:", last_meeting_date);

  const communicationDt = Date.parse(last_communication_date);
  const meetingDt = Date.parse(last_meeting_date);

  console.log(friendship.friend.first_name, "last-comm-dt:", communicationDt);
  console.log(friendship.friend.first_name, "last-meet-dt:", meetingDt);

  return (
    <div className="info-container">
      <div className="lr-cont">
        <span>
          <ImBubbles4 />
        </span>
        <span className={communication_status + "-font"}>
          {last_communication_date === "-"
            ? "-"
            : formatDistance(communicationDt, new Date().setHours(0, 0, 0, 0), {
                addSuffix: true,
              })}
        </span>
        <div></div>
      </div>
      <hr></hr>
      <div className="lr-cont">
        <span>
          <FaPeopleArrows />
        </span>
        <span className={meeting_status + "-font"}>
          {last_meeting_date === "-"
            ? "-"
            : formatDistance(meetingDt, new Date().setHours(0, 0, 0, 0), {
                addSuffix: true,
              })}
        </span>
        <div></div>
      </div>
    </div>
  );
}

export default LastContactInfo;
