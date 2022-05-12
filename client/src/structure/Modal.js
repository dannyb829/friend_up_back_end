import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";

function Modal({ content, setIsModal, setModalContent }) {
  const handleClick = () => {
    setIsModal(false);
    setModalContent(null);
  };

  return (
    <>
      <div className="modal-container" onClick={handleClick}></div>
      <div className="modal">
        {content}
        <button className="top-right icon-button close" onClick={handleClick}>
          <GrClose />
        </button>
      </div>
    </>
  );
}

export default Modal;
