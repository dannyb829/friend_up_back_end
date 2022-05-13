import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// Default Form Values
const defaultForm = {
  first: "",
  last: "",
  email: "",
  phone: "",
  image_url: "",
  description: "",
  meetingReminderInterval: "",
  meetingMax: "",
  meetingReminderUnit: 1,
  meetingMaxUnit: 1,
  communicationReminderInterval: "",
  communicationMax: "",
  communicationReminderUnit: 1,
  communicationMaxUnit: 1,
  groups: [],
};

function EditFriendForm({
  friendship,
  setIsModal,
  setModalContent,
  setUser,
  userGroups,
}) {
  // Default Form Values

  const currentValues = {
    first: friendship.friend.first_name,
    last: friendship.friend.last_name,
    email: friendship.friend.email,
    phone: friendship.friend.phone_number,
    image_url: friendship.friend.image_url,
    description: friendship.friend.description,
    meetingReminderInterval: friendship.meeting_reminder_interval,
    meetingMax: friendship.meeting_max,
    meetingReminderUnit: 1,
    meetingMaxUnit: 1,
    communicationReminderInterval: friendship.communication_reminder_interval,
    communicationMax: friendship.communication_max,
    communicationReminderUnit: 1,
    communicationMaxUnit: 1,
    groups: friendship.group_names,
  };
  // State and Variable Declaration
  const [formData, setFormData] = useState(currentValues);
  const {
    first,
    last,
    email,
    phone,
    image_url,
    description,
    meetingReminderInterval,
    meetingMax,
    meetingReminderUnit,
    meetingMaxUnit,
    communicationReminderInterval,
    communicationMax,
    communicationReminderUnit,
    communicationMaxUnit,
    groups,
  } = formData;

  // const groupsList = [
  //   { id: 1, group_name: "Close Friends" },
  //   { id: 2, group_name: "Family" },
  //   { id: 3, group_name: "Work" },
  //   { id: 4, group_name: "School" },
  // ];

  const nav = useNavigate();

  const handleGroupChange = ({ target: { name, checked } }) => {
    const newValue = checked
      ? [...groups, name]
      : groups.filter((group) => group !== name);

    const updatedFormData = { ...formData, groups: newValue };

    setFormData(updatedFormData);
  };
  const groupCheckboxes = userGroups.map((group) => {
    return (
      <label key={group.id}>
        <input
          name={group.group_name}
          type="checkbox"
          checked={groups.includes(group.group_name)}
          onChange={handleGroupChange}
        />
        {group.group_name}
      </label>
    );
  });

  // Reset formData to default values
  const resetForm = () => setFormData(defaultForm);

  // Handles form onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/friends/${friendship.friend.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: first,
        last_name: last,
        email: email,
        phone_number: parseInt(phone),
        image_url: image_url,
        description: description,
        groups: groups,
        meeting_reminder_interval:
          meetingReminderInterval * meetingReminderUnit,
        meeting_max: meetingMax * meetingMaxUnit,
        communication_reminder_interval:
          communicationReminderInterval * communicationReminderUnit,
        communication_max: communicationMax * communicationMaxUnit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsModal(false);
        setModalContent(null);
      })
      .catch((error) => console.log(error.message));

    resetForm();
  };

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({ target: { type, name, value, checked } }) => {
    const newValue = type === "checkbox" ? checked : value;
    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you wish to delete this friend from your profile? This cannot be undone."
    );
    console.log(confirmed);

    if (confirmed) {
      fetch(`/friends/${friendship.friend.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.ok ? res.json() : alert("something went wrong");
        })
        .then((data) => {
          console.log(data);
          setUser(data);
          setModalContent(null);
          setIsModal(false);
          nav("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <>
      <div className="lr-cont">
        <h3>Edit {friendship.friend.first_name}</h3>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="form-cont">
          <h4>Info</h4>
          <div className="f-col">
            <label>First Name</label>
            <input
              name="first"
              value={first}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="f-col">
            <label>Last Name</label>
            <input name="last" value={last} onChange={handleFormChange}></input>
          </div>
          <div className="f-col">
            <label>Email</label>
            <input
              name="email"
              value={email}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="f-col">
            <label>Phone</label>
            <input
              name="phone"
              value={phone}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="f-col">
            <label>Image URL</label>
            <input
              name="image_url"
              value={image_url}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="f-col">
            <label>Description</label>
            <textarea
              name="description"
              value={description}
              onChange={handleFormChange}
            ></textarea>
          </div>
        </div>
        <div className="form-cont">
          <h4>Group(s)</h4>
          <div>{groupCheckboxes}</div>
        </div>
        <div className="form-cont">
          <h4>Communication Preferences</h4>
          <label>
            Remind me to speak with with this friend after not communicating
            for:
          </label>
          <div>
            <input
              name="communicationReminderInterval"
              value={communicationReminderInterval}
              onChange={handleFormChange}
              type="number"
            ></input>
            <select
              name="communicationReminderUnit"
              value={communicationReminderUnit}
              onChange={handleFormChange}
            >
              <option value={1}>days</option>
              <option value={7}>weeks</option>
              <option value={365 / 12}>months</option>
            </select>
          </div>
          <label>
            I should never go this long without speaking to this friend:
          </label>
          <div>
            <input
              name="communicationMax"
              value={communicationMax}
              onChange={handleFormChange}
              type="number"
            ></input>
            <select
              name="communicationMaxUnit"
              value={communicationMaxUnit}
              onChange={handleFormChange}
            >
              <option value={1}>days</option>
              <option value={7}>weeks</option>
              <option value={365 / 12}>months</option>
            </select>
          </div>
          <h4>In-Person Preferences</h4>
          <label>
            Remind me to meet up with this friend after not seeing them for:
          </label>
          <div>
            <input
              name="meetingReminderInterval"
              value={meetingReminderInterval}
              onChange={handleFormChange}
              type="number"
            ></input>
            <select
              name="meetingReminderUnit"
              value={meetingReminderUnit}
              onChange={handleFormChange}
            >
              <option value={1}>days</option>
              <option value={7}>weeks</option>
              <option value={365 / 12}>months</option>
            </select>
          </div>

          <label>
            I should never go this long without seeing this friend in person:
          </label>
          <div>
            <input
              name="meetingMax"
              value={meetingMax}
              onChange={handleFormChange}
              type="number"
            ></input>
            <select
              name="meetingMaxUnit"
              value={meetingMaxUnit}
              onChange={handleFormChange}
            >
              <option value={1}>days</option>
              <option value={7}>weeks</option>
              <option value={365 / 12}>months</option>
            </select>
          </div>
        </div>
        <div className="f-center">
          <button className="btn">Update</button>
        </div>
        <div className="f-center remove">
          <button className="link-button neg" onClick={handleDeleteClick}>
            Remove {friendship.friend.first_name}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditFriendForm;
