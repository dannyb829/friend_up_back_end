import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Popup from "./Popup";

function OptionsButton({ popupOptions, isPopupUp, setIsPopupUp }) {
  const [isButtonActive, setIsButtonActive] = useState(true);

  // slight delay to reactivate button so popup does not immediately reappear
  useEffect(() => {
    if (!isPopupUp) {
      setTimeout(() => {
        setIsButtonActive(!isPopupUp);
      }, 10);
    }
  }, [isPopupUp]);

  const handleOptionsClick = () => {
    setIsPopupUp(true);
    setIsButtonActive(false);
  };

  return (
    <div className="top-right popupContainer">
      <button
        className="icon-button close"
        onClick={isButtonActive ? handleOptionsClick : null}
      >
        <HiDotsVertical />
      </button>
      {isPopupUp && (
        <Popup popupContent={popupOptions} setIsPopupUp={setIsPopupUp} />
      )}
    </div>
  );
}

export default OptionsButton;
