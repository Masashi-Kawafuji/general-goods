import React, { useState } from 'react';
import { Link } from 'gatsby';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import { VscChromeClose } from '@react-icons/all-files/vsc/VscChromeClose';
import Drawer from './Drawer';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="p-4 bg-gray-900">
      <div className="sm:py-6">
        <button
          type="button"
          className="sm:hidden float-right"
          onClick={handleDrawerClick}
        >
          <VscMenu size="1.5rem" />
        </button>
        <div className="text-center">
          <Link to="/">General Goods</Link>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen}>
        <button
          type="button"
          className="sm:hidden w-7 mb-5"
          onClick={handleDrawerClick}
        >
          <VscChromeClose size="1.5rem" />
        </button>
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
