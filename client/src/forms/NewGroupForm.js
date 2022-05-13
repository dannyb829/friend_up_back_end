import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

function NewGroupForm({
  newGroupInput,
  onNewGroupInputChange,
  toggleAddingGroup,
  setUser,
  resetModal
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newGroupInput === "") {
      return null;
    }

    fetch(`/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        group_name: newGroupInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        toggleAddingGroup();
        resetModal(data);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="row-item">
      <form onSubmit={handleSubmit}>
        <div className="lr-cont align-base">
          <div>
            <input value={newGroupInput} onChange={onNewGroupInputChange} />
          </div>
          <div>
            <button className="link-button aff">
              <FaCheck />
            </button>
            <button className="link-button neg" onClick={toggleAddingGroup}>
              <GiCancel />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewGroupForm;
