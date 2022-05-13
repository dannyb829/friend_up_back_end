import React, { useState, useEffect } from "react";
import UserInfo from "../dashboard/UserInfo";
import EditGroupsForm from "./EditGroupsForm";

function GroupFormItem({ group, setUser, resetModal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(group.group_name);

  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      return null;
    }

    fetch(`/groups/${group.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        group_name: input,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsEditing(false);
        resetModal(data);
      })
      .catch((error) => console.log(error.message));
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteClick = () => {
    const confirmed = window.confirm(
      "Are you sure you wish to delete this group? This cannot be undone."
    );

    if (confirmed) {
      fetch(`/groups/${group.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.ok ? res.json() : alert("something went wrong");
        })
        .then((data) => {
          setUser(data);
          resetModal(data);
        })
        .catch((error) => alert(error.message));
    }
  };

  const handleCancelClick = () => {
    setInput("");
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit}>
            <input value={input} onChange={onInputChange} />
            <button>✔️</button>
          </form>
          <button onClick={handleCancelClick}>cancel</button>
        </>
      ) : (
        <>
          <span>{group.group_name}</span>
          <button onClick={() => setIsEditing(true)}>✍️</button>
          <button onClick={handleDeleteClick}>X</button>
        </>
      )}
    </div>
  );
}

export default GroupFormItem;
