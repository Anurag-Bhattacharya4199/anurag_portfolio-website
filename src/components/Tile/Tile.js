import React from "react";
import "./Tile.scss";

const Tile = ({ title, description, link }) => (
  <div className="tile">
    <a href={link} className="tile-link">
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  </div>
);

export default Tile;
