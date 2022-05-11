import React, { useState, useEffect } from "react";
import InteractionFilterForm from "../forms/InteractionFilterForm";
import InteractionList from "./InteractionList";

function InteractionHistory({userInteractions, friendId}) {
  return (
    <div className="content-container page-container">
      <h3>History</h3>
      <button>➕ Add Interaction</button>
      <InteractionFilterForm />
      <hr />
      <InteractionList userInteractions={userInteractions} friendId={friendId}/>
    </div>
  );
}

export default InteractionHistory;
