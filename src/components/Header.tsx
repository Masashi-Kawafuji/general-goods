import React, { useState } from 'react';
import { Link } from 'gatsby';
import Drawer from './Drawer';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="py-4">
      <div className="sm:py-6">
        <button
          type="button"
          className="sm:hidden float-left w-7 ml-3"
          onClick={handleDrawerClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
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
