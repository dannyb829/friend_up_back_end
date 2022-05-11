import React, { useState, useEffect } from "react";

function Modal({ content, setIsModal }) {
  return (
    <div className="modal-container">
      <div className="modal page-centered">
        {content}
        <button onClick={() => setIsModal(false)}>X</button>
      </div>
    </div>
  );
}

export default Modal;
