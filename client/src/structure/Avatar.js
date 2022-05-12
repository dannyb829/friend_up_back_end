import React, { useState, useEffect } from "react";

function Avatar({
  image_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXBx9jb1Y1Y__UKnwyHXdK9AVIjon9khzjw&usqp=CAU",
}) {
  const image =
    image_url === ""
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXBx9jb1Y1Y__UKnwyHXdK9AVIjon9khzjw&usqp=CAU"
      : image_url;
  return (
    <div className="avatar">
      <img src={image} alt={"profile image"} />
    </div>
  );
}

export default Avatar;
