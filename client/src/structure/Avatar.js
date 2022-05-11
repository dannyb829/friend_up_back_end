import React, { useState, useEffect } from "react";

function Avatar(props) {
  return (
    <div className="avatar">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXBx9jb1Y1Y__UKnwyHXdK9AVIjon9khzjw&usqp=CAU"
        }
        alt={"profile image"}
      />
    </div>
  );
}

export default Avatar;
