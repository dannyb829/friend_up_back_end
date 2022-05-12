import React, { useState, useEffect } from "react";

function Alert({status, mode, name}) {
  return (
    <div>
      <span>{mode === 'meet' ? `You're overdue to meet up with ${name}`: 
      `Its time to reach out to ${name}`}</span>
    </div>
  );
}

export default Alert;
