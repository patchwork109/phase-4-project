import React from "react";
import "./style.css";

function MenuCards({id, name, description, image}) {
  return (
    <div className="col" id="menuCards">
      <div className="card h-100">
        <div className="card-image-wrapper">
          <img src={image} alt={description} className="card-img-top" />
          <div className="card-description">{description}</div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </div>
  )
}

export default MenuCards;












