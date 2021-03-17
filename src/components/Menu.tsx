import React from 'react';

const Menu: React.FC = ({ children }) => (
  <ul className="flex justify-between">{children}</ul>
);

export default Menu;
