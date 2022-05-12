import React, { useState, useEffect } from "react";

function GroupFormItem({ group, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(group.group_name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("update group name in db here");
    setIsEditing(false);
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
