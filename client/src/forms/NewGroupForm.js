import React, { useState, useEffect } from "react";

function NewGroupForm({
  newGroupInput,
  onNewGroupInputChange,
  toggleAddingGroup,
  setUser,
  resetModal,
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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newGroupInput} onChange={onNewGroupInputChange} />
        <button>submit</button>
      </form>
      <button onClick={toggleAddingGroup}>cancel</button>
    </div>
  );
}

export default NewGroupForm;
