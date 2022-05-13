import React, { useState, useEffect } from "react";
import { format } from "date-fns";

// Default Form Values
const defaultForm = {
  date: format(Date.parse(new Date()), "yyyy-MM-dd"),
  locationOrMethod: "",
  description: "",
  isInPerson: false,
};

function AddInteractionForm({ friend, setIsModal, setModalContent, setUser }) {
  // State and Variable Declaration
  const [formData, setFormData] = useState(defaultForm);
  const { date, locationOrMethod, description, isInPerson } = formData;

  // Reset formData to default values
  const resetForm = () => setFormData(defaultForm);

  // Handles form onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/interactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        friend_id: friend.id,
        "in_person?": isInPerson,
        date: date,
        location_or_method: locationOrMethod,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('interaction added');
        // setUserInteractions(data.interactions);
        setUser(data);
        setModalContent(null);
        setIsModal(false);
      })
      .catch((error) => console.log(error.message));
    // do form submission actions here

    resetForm();
  };

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({
    target,
    target: { type, name, value, checked },
  }) => {
    const newValue =
      type === "checkbox"
        ? checked
        : type === "radio"
        ? value === "true"
          ? true
          : false
        : value;
    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log a New Interaction with {friend["first_name"]}</h3>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Type
        <label>
          <input
            name="isInPerson"
            type="radio"
            value={!!false}
            checked={!isInPerson}
            onChange={handleFormChange}
          />
          Communication
        </label>
        <label>
          <input
            name="isInPerson"
            type="radio"
            value={!!true}
            checked={isInPerson}
            onChange={handleFormChange}
          />
          In-Person
        </label>
      </label>
      <label>
        {isInPerson ? "Location" : "Method (call, text, etc.)"}
        <input
          name="locationOrMethod"
          value={locationOrMethod}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          value={description}
          onChange={handleFormChange}
        />
      </label>
      <button className="btn">Add Interaction</button>
    </form>
  );
}

export default AddInteractionForm;
