import React, { ComponentProps } from 'react';
import { Link } from 'gatsby';

type MenuItemProps = ComponentProps<typeof Link>;

const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => (
  <li className="mb-3 sm:mb-0 text-lg transition-colors duration-300 hover:text-gray-400">
    <Link to={to}>{children}</Link>
  </li>
);

export default MenuItem;
