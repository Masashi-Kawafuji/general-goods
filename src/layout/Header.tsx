import React, { ReactEventHandler, useState } from 'react';
import { Link } from 'gatsby';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import logo from 'images/logo.png';
import Container from 'components/Container';
import Drawer from 'components/Drawer';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';

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
            <Nav>
              <NavItem to="/news/">News</NavItem>
              <NavItem to="/schedule/">Schedule</NavItem>
              <NavItem to="/about/">About</NavItem>
              <NavItem to="/contact/">Contact</NavItem>
            </Nav>
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
        <Nav vertical>
          <NavItem to="/news/">News</NavItem>
          <NavItem to="/schedule/">Schedule</NavItem>
          <NavItem to="/about/">About</NavItem>
          <NavItem to="/contact/">Contact</NavItem>
        </Nav>
      </Drawer>
    </header>
  );
};

export default Header;
