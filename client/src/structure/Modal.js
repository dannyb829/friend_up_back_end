import React, { useState, useEffect } from "react";

function Modal({ content, setIsModal, setModalContent }) {
  const handleClick = () => {
    setIsModal(false);
    setModalContent(null);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        {content}
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
}

export default Modal;
