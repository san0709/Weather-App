import React from "react";

export default function Card({
  image,
  title,
  children,
  ariaLabel = "weather stat",
}) {
  return (
    <article className="card" aria-label={ariaLabel}>
      <h6>{title}</h6>
      <img src={image} alt="" className="card-icon" aria-hidden="true" />
      <div className="card-body">
        {children ?? <span className="placeholder">—</span>}
      </div>
    </article>
  );
}
