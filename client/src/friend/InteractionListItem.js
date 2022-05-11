import React, { useState, useEffect } from "react";

function InteractionListItem({interaction}) {
  const { date, location_or_method, description } = interaction
  return (
    <div>
      <span>🗣/📍</span>
      <span>{date}</span>
      <span>–</span>
      <span>{location_or_method}</span>
      <span> {description}</span>
    </div>
  );
}

export default InteractionListItem;
