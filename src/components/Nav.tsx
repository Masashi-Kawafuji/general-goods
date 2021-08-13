import React from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type NavProps = {
  vertical?: boolean;
  className?: string;
};

const Nav: React.FC<NavProps> = ({ vertical, className, children }) => (
  <nav
    className={mergeCssClassName(
      className,
      'flex',
      vertical ? 'flex-col' : 'justify-between'
    )}
  >
    {children}
  </nav>
);

export default Nav;
