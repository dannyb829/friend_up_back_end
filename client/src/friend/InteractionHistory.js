import React, { useState, useEffect } from "react";
import InteractionFilterForm from "../forms/InteractionFilterForm";
import InteractionList from "./InteractionList";

function InteractionHistory(props) {
  return (
    <div>
      <h3>History</h3>
      <button>➕ Add Interaction</button>
      <InteractionFilterForm />
      <InteractionList />
    </div>
  );
}

export default InteractionHistory;
