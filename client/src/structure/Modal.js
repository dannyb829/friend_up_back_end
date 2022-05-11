import React, { useState, useEffect } from "react";

function Modal({ content }) {
  return (
    <div className="modal-container">
      <div className="modal page-centered">
        {content}
        <button>X</button>
      </div>
    </div>
  );
}

export default Modal;
