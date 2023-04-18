import React from "react";

function MenuCards({id, name, description, image}) {
 


  return (
    <div>
      <img src={image} alt={description} />
      <h2>{name}</h2>
      <h4>{description}</h4>
    </div>

  )

}

export default MenuCards;