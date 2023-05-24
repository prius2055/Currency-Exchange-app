import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <NavLink to="/">currency-list</NavLink>
    </ul>
  </nav>
);

export default Navbar;
