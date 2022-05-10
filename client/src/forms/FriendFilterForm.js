import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Checkbox, Radio } from "react-btn-checkbox";

// Default Form Values
const defaultForm = {
  searchInput: "",
  groupFilter: "all",
  isShowPoor: true,
  isShowWarning: true,
  isShowGood: true,
  typeFilter: "either",
};

function FriendFilterForm(props) {
  // State and Variable Declaration
  const [formData, setFormData] = useState(defaultForm);
  const {
    searchInput,
    groupFilter,
    isShowPoor,
    isShowWarning,
    isShowGood,
    typeFilter,
  } = formData;

  // Reset formData to default values
  const resetForm = () => setFormData(defaultForm);

  // // Handles form onSubmit event
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // do form submission actions here

  //   resetForm();
  // }

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({ target: { type, name, value, checked } }) => {
    let newValue;

    if (type === "checkbox") newValue = checked;
    // else if (type === "radio") newValue = name;
    else newValue = value;

    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  };

  const statusOptions = {
    poor: false,
    warning: false,
    good: false,
  };

  return (
    <form>
      <SearchBar
        name={"searchInput"}
        onChange={handleFormChange}
        searchInput={searchInput}
      />
      <label>
        Group:
        <select
          name="groupFilter"
          value={groupFilter}
          onChange={handleFormChange}
        >
          <option value={"all"}>All</option>
          <option value={"two"}>two</option>
          <option value={"three"}>three</option>
        </select>
      </label>
      Status:
      <label>
        <input
          name="isShowPoor"
          type="checkbox"
          defaultChecked
          value={isShowPoor}
          onChange={handleFormChange}
        />
        poor
      </label>
      <label>
        <input
          name="isShowWarning"
          type="checkbox"
          defaultChecked
          value={isShowWarning}
          onChange={handleFormChange}
        />
        warning
      </label>
      <label>
        <input
          name="isShowGood"
          type="checkbox"
          defaultChecked
          value={isShowGood}
          onChange={handleFormChange}
        />
        good
      </label>
      for
      <label>
        <input
          name="typeFilter"
          type="radio"
          value="communicate"
          checked={typeFilter === "communicate"}
          onChange={handleFormChange}
        />
        🗣
      </label>
      <label>
        <input
          name="typeFilter"
          type="radio"
          value="visit"
          checked={typeFilter === "visit"}
          onChange={handleFormChange}
        />
        📍
      </label>
      <label>
        <input
          name="typeFilter"
          type="radio"
          value="either"
          checked={typeFilter === "either"}
          defaultChecked
          onChange={handleFormChange}
        />
        either
      </label>
    </form>
  );
}

export default FriendFilterForm;
