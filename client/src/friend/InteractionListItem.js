import React, { useState, useEffect } from "react";
import { format, formatDistance, subDays } from "date-fns";

function InteractionListItem({ interaction }) {
  const {
    date,
    location_or_method,
    description,
    inPerson = interaction["in_person?"],
  } = interaction;

  const dateTime = Date.parse(date);

  return (
    <div>
      <span>{inPerson ? "📍" : "🗣"}</span>
      <span>
        {formatDistance(dateTime, new Date(), { addSuffix: true }) +
          " (" +
          format(dateTime, "MMM do") +
          ")"}
      </span>
      <span>–</span>
      <span>{location_or_method}</span>
      <span> {description}</span>
    </div>
  );
}

export default InteractionListItem;
