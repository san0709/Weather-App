import React from "react";
const Card = ({ image, children }) => {
  return (
    <div className="card">
      <img src={image} alt="weather" />
      {children}
    </div>
  );
};
export default Card;
