import React from "react";
import Logo from '../NavbarComponents/Logo/Logo'
import "./Navbar.css";
import Search from '../NavbarComponents/Search/Search';

//Search bar: 
const Navbar = props => {
  return (
     <div className="Navbar">
        <Logo> </Logo>
        <Search> </Search>
    </div> 

  );
};

export default Navbar;
