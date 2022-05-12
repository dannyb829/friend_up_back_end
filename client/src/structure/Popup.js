import React, { useState, useEffect } from "react";
import OutsideAlerter from "../utility/OustideAlerter";

function Popup({ popupContent, setIsPopupUp }) {
  return (
    <OutsideAlerter callback={() => setIsPopupUp(false)}>
      <div className="popup">{popupContent}</div>
    </OutsideAlerter>
  );
}

export default Popup;
