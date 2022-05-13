import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Checkbox, Radio } from "react-btn-checkbox";

function FriendFilterForm({ formData, setFormData, user }) {
  const {
    searchInput,
    groupFilter,
    isShowPoor,
    isShowWarning,
    isShowGood,
    typeFilter,
  } = formData;

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({ target: { type, name, value, checked } }) => {
    let newValue;

    if (type === "checkbox") newValue = checked;
    // else if (type === "radio") newValue = name;
    else newValue = value;

    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  };

  const groupOptions = user.groups.map((group) => {
    return (
      <option key={group.id} value={group.group_name}>
        {group.group_name}
      </option>
    );
  });

  const statusOptions = {
    poor: false,
    warning: false,
    good: false,
  };

  return (
    <form>
      <div className="lr-cont">
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
            <option value={""}>All</option>
            {groupOptions}
          </select>
        </label>
      </div>
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
          onChange={handleFormChange}
        />
        either
      </label>
    </form>
  );
}

export default FriendFilterForm;
