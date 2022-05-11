import React, { useState, useEffect } from "react";
import InteractionFilterForm from "../forms/InteractionFilterForm";
import InteractionList from "./InteractionList";

function InteractionHistory(props) {
  return (
    <div className="content-container page-container">
      <h3>History</h3>
      <button>➕ Add Interaction</button>
      <InteractionFilterForm />
      <hr />
      <InteractionList />
    </div>
  );
}

export default InteractionHistory;
