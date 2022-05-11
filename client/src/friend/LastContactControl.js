import React, { useState, useEffect } from "react";

function LastContactControl({friendship}) {
  const { days_since_communication, days_since_meeting } = friendship

  return (
    <div>
      <span>🗣</span>
      <span>{days_since_communication} days ago</span>
      <button>message</button>
      <span>📍</span>
      <span>{days_since_meeting} days ago</span>
      <button>schedule</button>
    </div>
  );
}

export default LastContactControl;
