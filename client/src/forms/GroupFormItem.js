import React, { useState, useEffect } from "react";
import UserInfo from "../dashboard/UserInfo";
import EditGroupsForm from "./EditGroupsForm";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

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
    setInput(group.group_name);
    setIsEditing(false);
  };

  return (
    <div className="row-item">
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="lr-cont">
              <div>
                <input value={input} onChange={onInputChange} />
              </div>

              <div>
                <button className="link-button aff">
                  <FaCheck />
                </button>
                <button className="link-button neg" onClick={handleCancelClick}>
                  <GiCancel />
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <div className="lr-cont">
          <span>{group.group_name}</span>
          <div>
            <button className="link-button" onClick={() => setIsEditing(true)}>
              <FaEdit />
            </button>
            <button className="link-button" onClick={handleDeleteClick}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroupFormItem;
