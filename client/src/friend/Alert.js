import React, { useState, useEffect } from "react";

function Alert({ status, mode, name }) {
  return (
    <div className="f-center">
      <div className={"content-container alert alert-" + status}>
        <span>
          {mode === "meet"
            ? `You're overdue to meet up with ${name}`
            : `Its time to reach out to ${name}`}
        </span>
      </div>
    </div>
  );
}

export default Alert;
