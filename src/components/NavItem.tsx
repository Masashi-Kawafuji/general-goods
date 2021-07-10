import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'gatsby';

type NavItemProps = ComponentPropsWithoutRef<typeof Link>;

const NavItem: React.FC<NavItemProps> = ({ children, to }) => (
  <Link
    to={to}
    className="block mb-3 sm:mb-0 w-max text-lg font-vollkorn text-darken hover:text-lighten transition-colors duration-300"
  >
    {children}
  </Link>
);

export default NavItem;
