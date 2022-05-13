import React, { useState, useEffect } from "react";

function Error404(props) {
  return (
    <div className="page-centered">
      <h1>Error404: Not Found</h1>
      <p>
        Sorry, whatever you're looking for isn't here! Try returning to the
        dashboard by clicking the "friendup" button at the top of the page!
      </p>
    </div>
  );
}

export default Error404;
