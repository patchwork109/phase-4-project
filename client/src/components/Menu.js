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
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {renderMenuItems}
      </div>
    </div>
  )

}

export default Menu;









