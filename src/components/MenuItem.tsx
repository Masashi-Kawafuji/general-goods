import React, { ComponentProps } from 'react';
import { Link } from 'gatsby';

type MenuItemProps = ComponentProps<typeof Link>;

const MenuItem: React.FC<MenuItemProps> = ({ children, to }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

export default MenuItem;
