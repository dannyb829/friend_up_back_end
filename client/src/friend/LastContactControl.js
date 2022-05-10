import React, { useState, useEffect } from "react";

function LastContactControl(props) {
  return (
    <div>
      <span>🗣</span>
      <span># days ago</span>
      <button>message</button>
      <span>📍</span>
      <span># days ago</span>
      <button>schedule</button>
    </div>
  );
}

export default LastContactControl;
