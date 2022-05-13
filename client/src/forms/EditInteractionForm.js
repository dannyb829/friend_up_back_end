import React, { useState, useEffect } from "react";
import { format } from "date-fns";

function EditInteractionForm({
  interaction,
  friend,
  setIsModal,
  setModalContent,
  setUser,
}) {
  // Default Form Values
  const defaultForm = {
    date: format(Date.parse(interaction.date.slice(0, -1)), "yyyy-MM-dd"),
    locationOrMethod: interaction.location_or_method,
    description: interaction.description,
    isInPerson: interaction["in_person?"],
  };

  // State and Variable Declaration
  const [formData, setFormData] = useState(defaultForm);
  const { date, locationOrMethod, description, isInPerson } = formData;
  console.log("interaction.date:", interaction.date.slice(0, -1));
  console.log("date:", date);

  // Handles form onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("date to send:", date);

    fetch(`/interactions/${interaction.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "in_person?": isInPerson,
        date: date,
        location_or_method: locationOrMethod,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setUserInteractions(data.interactions);
        setUser(data);
        setModalContent(null);
        setIsModal(false);
      })
      .catch((error) => console.log(error.message));
    // do form submission actions here
  };

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({
    target,
    target: { type, name, value, checked },
  }) => {
    console.log("edit val:", value);

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
    <>
      <div className="lr-cont">
        <h3>Edit this Interaction with {friend["first_name"]}</h3>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleFormChange}
        />

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
        <button className="btn">Update Interaction</button>
      </form>
    </>
  );
}

export default EditInteractionForm;
