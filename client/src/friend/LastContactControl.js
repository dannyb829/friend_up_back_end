import React, { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { ImBubbles4 } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa";

function LastContactControl({ friendship }) {
  const {
    last_communication_date,
    last_meeting_date,
    communication_status,
    meeting_status,
  } = friendship;

  const communicationDt = Date.parse(last_communication_date);
  const meetingDt = Date.parse(last_meeting_date);

  return (
    <div className="info-container-lg ">
      <div className="lr-cont align-base">
        <span className="icon-space">
          <ImBubbles4 />
        </span>
        <span className={communication_status + "-font"}>
          {last_communication_date === "-"
            ? "-"
            : formatDistance(communicationDt, new Date().setHours(0, 0, 0, 0), {
                addSuffix: true,
              })}
        </span>
        <button
          className="btn"
          onClick={() => alert("messenger: coming soon!")}
        >
          message
        </button>
      </div>
      <hr />
      <div className="lr-cont align-base">
        <span className="icon-space">
          <FaPeopleArrows />
        </span>
        <span className={meeting_status + "-font"}>
          {last_meeting_date === "-"
            ? "-"
            : formatDistance(meetingDt, new Date().setHours(0, 0, 0, 0), {
                addSuffix: true,
              })}
        </span>
        <button
          className="btn"
          onClick={() => alert("scheduler: coming soon!")}
        >
          schedule
        </button>
      </div>
    </div>
  );
}

export default LastContactControl;
