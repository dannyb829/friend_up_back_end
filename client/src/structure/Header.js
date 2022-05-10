import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">friendup</Link>
      <button>log out</button>
    </div>
  );
}

export default Header;
