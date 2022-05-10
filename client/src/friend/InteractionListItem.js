import React, { useState, useEffect } from "react";

function InteractionListItem(props) {
  return (
    <div>
      <span>🗣/📍</span>
      <span>[date]</span>
      <span>–</span>
      <span>place/method</span>
      <span>description</span>
    </div>
  );
}

export default InteractionListItem;
