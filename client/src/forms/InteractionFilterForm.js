import React, { useState, useEffect } from "react";
import { ImBubbles4 } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa";

function InteractionFilterForm({ typeFilter, setTypeFilter }) {
  // State and Variable Declaration
  // const [typeFilter, setTypeFilter] = useState("both");

  // Handles input onChange events: input name attributes must match formData keys
  const handleFilterChange = ({ target: { name } }) => {
    setTypeFilter(name);
  };

  return (
    <form>
      Type:
      <label>
        <input
          name="communicate"
          type="radio"
          checked={typeFilter === "communicate"}
          onChange={handleFilterChange}
        />
        <ImBubbles4 />
      </label>
      <label>
        <input
          name="visit"
          type="radio"
          checked={typeFilter === "visit"}
          onChange={handleFilterChange}
        />
        <FaPeopleArrows />
      </label>
      <label>
        <input
          name="both"
          type="radio"
          checked={typeFilter === "both"}
          // defaultChecked
          onChange={handleFilterChange}
        />
        both
      </label>
    </form>
  );
}

export default InteractionFilterForm;
