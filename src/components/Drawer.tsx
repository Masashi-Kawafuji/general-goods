import React from 'react';

type DrawerProps = {
  isOpen: boolean;
};

const Drawer: React.FC<DrawerProps> = ({ children, isOpen }) => (
  <div
    className={`${
      !isOpen && '-left-full'
    } sm:block sm:static transition-all duration-500 fixed z-10 left-0 inset-y-0 w-3/4 sm:w-full px-4 pt-4 bg-gray-900`}
  >
    {children}
  </div>
);

export default Drawer;
