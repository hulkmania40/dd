import React from 'react';
import MenuItems from "./MenuItems";
import Data from "../data/data.json";

const Navbar = () => {

  return (
    <nav>
      <ul className="menus">
        {Data.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
