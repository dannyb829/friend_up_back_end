import React, { useState, useEffect } from "react";
import { formatDistance } from "date-fns";

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
    <div>
      <span>🗣</span>
      <span className={communication_status + "-font"}>
        {formatDistance(communicationDt, new Date(), { addSuffix: true })}
      </span>
      <button>message</button>
      <span>📍</span>
      <span className={meeting_status + "-font"}>
        {formatDistance(meetingDt, new Date(), { addSuffix: true })}
      </span>
      <button>schedule</button>
    </div>
  );
}

export default LastContactControl;
