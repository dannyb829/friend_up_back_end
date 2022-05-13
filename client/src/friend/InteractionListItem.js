import React, { useState, useEffect } from "react";
import { format, formatDistance } from "date-fns";
import { ImBubbles4 } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import EditInteractionForm from "../forms/EditInteractionForm";

function InteractionListItem({
  interaction,
  setUser,
  setModalContent,
  setIsModal,
  friend,
}) {
  const {
    date,
    location_or_method,
    description,
    inPerson = interaction["in_person?"],
  } = interaction;

  const dateTime = Date.parse(date.slice(0, -1));

  const handleEditClick = () => {
    setModalContent(
      <EditInteractionForm
        interaction={interaction}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
        friend={friend}
      />
    );
    setIsModal(true);
  };

  const handleDeleteClick = () => {
    const confirmed = window.confirm(
      "Are you sure you wish to delete this interaction? This cannot be undone."
    );

    if (confirmed) {
      fetch(`/interactions/${interaction.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.ok ? res.json() : alert("something went wrong");
        })
        .then((data) => {
          setUser(data);
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className="row-item lr-cont">
      <div className="spaced">
        <span>{inPerson ? <FaPeopleArrows /> : <ImBubbles4 />}</span>
        <span>
          {formatDistance(dateTime, new Date().setHours(0, 0, 0, 0), {
            addSuffix: true,
          }) +
            " (" +
            format(dateTime, "MMM do") +
            ")"}
        </span>
        <span>–</span>
        <span>{location_or_method}</span>
        <span> {description}</span>
      </div>
      <div>
        <button className="link-button" onClick={handleEditClick}>
          <FaEdit />
        </button>
        <button className="link-button" onClick={handleDeleteClick}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default InteractionListItem;
