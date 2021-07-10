import React from 'react';

type NavProps = {
  vertical?: boolean;
};

const Nav: React.FC<NavProps> = ({ vertical, children }) => (
  <nav className={vertical ? '' : 'flex justify-between'}>{children}</nav>
);

export default Nav;
