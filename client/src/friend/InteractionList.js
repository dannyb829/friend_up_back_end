import React, { useState, useEffect } from "react";
import InteractionListItem from "./InteractionListItem";

function InteractionList({userInteractions, friendId}) {

  const interactions = userInteractions.filter(int => int.friend_id === friendId) 
  const displayInteractions = interactions.map(int => <InteractionListItem key={int.id} interaction={int}/>)

  return (
    <div>
      {displayInteractions}
    </div>
  );
}

export default InteractionList;
