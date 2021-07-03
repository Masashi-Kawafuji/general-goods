import React, { ReactEventHandler, useState } from 'react';
import { Link } from 'gatsby';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import logo from 'images/logo.png';
import Container from 'components/Container';
import Drawer from 'components/Drawer';
import Menu from 'components/Menu';
import MenuItem from 'components/MenuItem';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen: ReactEventHandler<HTMLButtonElement> = () => {
    setIsDrawerOpen(true);
  };

  return (
    <header>
      <div className="py-6">
        <Container className="relative flex justify-between">
          <Link to="/" className="mr-24">
            <img
              src={logo}
              alt="brand logo"
              className="inline-block mr-1 h-6"
            />
            <span className="font-vollkorn font-bold tracking-tighter text-xl">
              General Goods
            </span>
          </Link>
          <div className="hidden sm:block flex-grow max-w-xs">
            <Menu>
              <MenuItem to="/news/">News</MenuItem>
              <MenuItem to="/schedule/">Schedule</MenuItem>
              <MenuItem to="/about/">About</MenuItem>
              <MenuItem to="/contact/">Contact</MenuItem>
            </Menu>
          </div>
          <button
            type="button"
            className="absolute top-0 right-6 sm:hidden"
            onClick={handleDrawerOpen}
          >
            <VscMenu size="1.5rem" />
          </button>
        </Container>
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        className="sm:hidden"
      >
        <Link to="/" className="inline-block my-6">
          <img src={logo} alt="brand logo" className="inline-block mr-1 h-6" />
          <span className="font-vollkorn font-bold tracking-tighter text-xl">
            General Goods
          </span>
        </Link>
        <Menu vertical>
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
