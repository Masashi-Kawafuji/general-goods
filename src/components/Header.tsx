import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Header: React.FC = () => (
  <header className="py-4">
    <div className="text-center py-6">
      <Link to="/">General Goods</Link>
    </div>
    <div className="max-w-sm mx-auto px-4">
      <Menu>
        <MenuItem to="/news/">News</MenuItem>
        <MenuItem to="/schedule/">Schedule</MenuItem>
        <MenuItem to="/about/">About</MenuItem>
        <MenuItem to="/contact/">Contact</MenuItem>
      </Menu>
    </div>
  </header>
);

export default Header;
