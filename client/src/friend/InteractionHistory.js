import React, { useState, useEffect } from "react";
import InteractionFilterForm from "../forms/InteractionFilterForm";
import InteractionList from "./InteractionList";
import AddInteractionForm from "../forms/AddInteractionForm";

function InteractionHistory({
  userInteractions,
  friendId,
  setIsModal,
  setModalContent,
  setUser,
}) {
  const [typeFilter, setTypeFilter] = useState("both");

  let interactionsToDisplay = userInteractions;
  switch (typeFilter) {
    case "communicate":
      interactionsToDisplay = userInteractions.filter(
        (interaction) => !interaction["in_person?"]
      );
      break;
    case "visit":
      interactionsToDisplay = userInteractions.filter(
        (interaction) => interaction["in_person?"]
      );
      break;
  }

  const handleAddInteractionClick = () => {
    setModalContent(
      <AddInteractionForm
        friendId={friendId}
        setIsModal={setIsModal}
        setModalContent={setModalContent}
        setUser={setUser}
      />
    );
    setIsModal(true);
  };

  return (
    <div className="content-container page-container">
      <h3>History</h3>
      <button onClick={handleAddInteractionClick}>➕ Add Interaction</button>
      <InteractionFilterForm
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <hr />
      <InteractionList
        userInteractions={interactionsToDisplay}
        friendId={friendId}
      />
    </div>
  );
}

export default InteractionHistory;
