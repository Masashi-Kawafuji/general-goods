import React from 'react';

const Menu: React.FC = ({ children }) => (
  <ul className="sm:flex mx-auto sm:my-0 sm:max-w-sm min-h-full justify-between font-vollkorn">
    {children}
  </ul>
);

export default Menu;
