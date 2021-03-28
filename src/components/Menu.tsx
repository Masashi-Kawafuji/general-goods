import React from 'react';

const Menu: React.FC = ({ children }) => (
  <ul className="sm:flex mx-auto px-2 sm:px-0 sm:my-0 sm:max-w-sm min-h-full justify-between font-vollkorn">
    {children}
  </ul>
);

export default Menu;
