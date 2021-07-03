import React, { ComponentProps } from 'react';
import { Link } from 'gatsby';

type MenuItemProps = ComponentProps<typeof Link>;

const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => (
  <li className="mb-3 sm:mb-0">
    <Link
      to={to}
      className="text-lg font-vollkorn text-darken hover:text-lighten transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

export default MenuItem;
