import React, { useState, useEffect } from "react";
import UserInfo from "../dashboard/UserInfo";
import EditGroupsForm from "./EditGroupsForm";

function GroupFormItem({ group, setUser, user, setModalContent, setIsModal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(group.group_name);

  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const resetModal = (updatedUser) => {
    setModalContent(
      <EditGroupsForm
        user={updatedUser}
        setUser={setUser}
        setModalContent={setModalContent}
        setIsModal={setIsModal}
      />
    );
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteClick = () => {
    const confirmed = window.confirm(
      "Are you sure you wish to delete this group? This cannot be undone."
    );

    if (confirmed) {
      console.log("group to be deleted");
    }
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={onInputChange} />
          <button>✔️</button>
        </form>
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
