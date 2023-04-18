import React from "react";
import MenuCards from "./MenuCards";

function Menu({menuItems}) {
 
  const renderMenuItems = menuItems.map(menuItem => {
    return <MenuCards key={menuItem.id}
      id={menuItem.id}
      name={menuItem.name}
      description={menuItem.description}
      image={menuItem.image}
    />
  })

  return (
    <div>
      {renderMenuItems}
    </div>

  )

}

export default Menu;