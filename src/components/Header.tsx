import React, { useState } from 'react';
import { Link } from 'gatsby';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import logo from 'images/logo.png';
import Drawer from './Drawer';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleToggleDrawerOpen() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <header className="p-4 bg-gray-900">
      <div className="sm:py-6">
        <button
          type="button"
          className="sm:hidden float-right"
          onClick={handleToggleDrawerOpen}
        >
          <VscMenu size="1.5rem" />
        </button>
        <div className="text-center">
          <Link to="/" className="font-vollkorn text-xl">
            General Goods
          </Link>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
        <Link
          to="/"
          className="sm:hidden inline-block py-4 mb-4 font-vollkorn text-xl text-center"
        >
          General Goods
        </Link>
        <Menu>
          <MenuItem to="/news/">News</MenuItem>
          <MenuItem to="/schedule/">Schedule</MenuItem>
          <MenuItem to="/about/">About</MenuItem>
          <MenuItem to="/contact/">Contact</MenuItem>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
