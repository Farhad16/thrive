import React from 'react';
import './Navbar.css';
import logo from '../../assets/icons/logo.svg'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
    </div>
  );
};

export default Navbar;