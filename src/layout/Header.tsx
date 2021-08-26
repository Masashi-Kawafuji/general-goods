import React, { useState } from 'react';
import { Link } from 'gatsby';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import { VscClose } from '@react-icons/all-files/vsc/VscClose';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import logo from 'images/logo.png';
import Container from 'components/Container';
import MobileNav from 'components/MobileNav';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import ExternalLink from 'components/ExternalLink';

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="border-b border-gray-500">
      <div className="py-4 sm:py-6">
        <Container className="relative flex">
          <Link to="/">
            <img
              src={logo}
              alt="brand logo"
              className="inline-block mr-1 h-6"
            />
            <span className="font-oswald tracking-tight text-lg">
              General Goods
            </span>
          </Link>
          <div className="hidden sm:block flex-1">
            <div className="flex justify-end">
              <Nav className="w-72">
                <NavItem to="/news/" className="text-lg">
                  NEWS
                </NavItem>
                <NavItem to="/live/" className="text-lg">
                  LIVE
                </NavItem>
                <NavItem to="/about/" className="text-lg">
                  ABOUT
                </NavItem>
                <NavItem to="/contact/" className="text-lg">
                  CONTACT
                </NavItem>
              </Nav>
              <ul className="flex justify-between ml-8 w-24">
                <li>
                  <ExternalLink url="https://twitter.com/_General_Goods_">
                    <FaTwitter className="h-full" size="1.125rem" />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink url="https://www.instagram.com/_general_goods_">
                    <FaInstagram className="h-full" size="1.125rem" />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink url="https://www.youtube.com/channel/UC2NSO7mxY2L7C9ft0FL5htw">
                    <FaYoutube className="h-full" size="1.125rem" />
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
          {!isMobileNavOpen && (
            <button
              type="button"
              className="absolute top-0 right-8 sm:hidden"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <VscMenu size="1.5rem" />
            </button>
          )}
        </Container>
      </div>
      <MobileNav isOpen={isMobileNavOpen} className="sm:hidden">
        <button
          type="button"
          className="absolute top-4 right-8 sm:hidden z-20"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <VscClose size="1.5rem" />
        </button>
        <Container className="pt-16 h-full">
          <Nav vertical className="mb-6">
            <NavItem to="/" className="text-3xl mb-6">
              HOME
            </NavItem>
            <NavItem to="/news/" className="text-3xl mb-6">
              NEWS
            </NavItem>
            <NavItem to="/live/" className="text-3xl mb-6">
              LIVE
            </NavItem>
            <NavItem to="/about/" className="text-3xl mb-6">
              ABOUT
            </NavItem>
            <NavItem to="/contact/" className="text-3xl mb-6">
              CONTACT
            </NavItem>
          </Nav>
          <ul className="flex justify-between">
            <li>
              <ExternalLink url="https://twitter.com/_General_Goods_">
                <FaTwitter className="h-full" size="1.875rem" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink url="https://www.instagram.com/_general_goods_">
                <FaInstagram className="h-full" size="1.875rem" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink url="https://www.youtube.com/channel/UC2NSO7mxY2L7C9ft0FL5htw">
                <FaYoutube className="h-full" size="1.875rem" />
              </ExternalLink>
            </li>
          </ul>
        </Container>
      </MobileNav>
    </header>
  );
};

export default Header;
