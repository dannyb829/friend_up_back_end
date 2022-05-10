import React, { useState, useEffect } from "react";

function SearchBar({ name, onChange, searchInput }) {
  return (
    <div>
      <span>🔎</span>
      <input
        name={name}
        type="text"
        value={searchInput}
        placeholder="Search"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default SearchBar;
