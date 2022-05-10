import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">
        <h3>friendup</h3>
      </Link>
      <button>log out</button>
    </div>
  );
}

export default Header;
