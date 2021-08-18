/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'gatsby';
import mergeCssClassName from 'utils/mergeCssClassName';

type NavItemProps = ComponentPropsWithoutRef<typeof Link>;

const NavItem: React.FC<NavItemProps> = ({
  to,
  className,
  activeClassName,
  children,
  ...otherProps
}) => (
  <Link
    to={to}
    className={mergeCssClassName(
      className,
      'block sm:mb-0 w-max font-oswald hover:text-darken transition-colors duration-300'
    )}
    activeClassName={mergeCssClassName(activeClassName, 'text-darkest')}
    {...otherProps}
  >
    {children}
  </Link>
);

export default NavItem;
