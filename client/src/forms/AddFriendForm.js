import React, { useState, useEffect } from "react";

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
  communicationReminderInterval: "",
  communicationMax: "",
};

function AddFriendForm(props) {
  // State and Variable Declaration
  const [formData, setFormData] = useState(defaultForm);
  const {
    first,
    last,
    email,
    phone,
    image_url,
    description,
    meetingReminderInterval,
    meetingReminderMax,
    communicationReminderInterval,
    communicationMax,
  } = formData;

  // Reset formData to default values
  const resetForm = () => setFormData(defaultForm);

  // Handles form onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // do form submission actions here

    resetForm();
  };

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({ target: { type, name, value, checked } }) => {
    const newValue = type === "checkbox" ? checked : value;
    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  };

  return (
    <form>
      <label>
        First Name
        <input name="first" value={first}></input>
      </label>
    </form>
  );
}

export default AddFriendForm;
