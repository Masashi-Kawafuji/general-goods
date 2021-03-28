import React, { useState, useEffect } from 'react';

type DrawerProps = {
  isOpen: boolean;
};

const Drawer: React.FC<DrawerProps> = ({ children, isOpen }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    setIsDrawerOpen(isOpen);
  }, [isOpen]);

  const handleMaskClick = () => setIsDrawerOpen(false);

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50"
          onClick={handleMaskClick}
        />
      )}
      <div
        className={`${
          !isDrawerOpen && '-left-full'
        } fixed left-0 inset-y-0 sm:block sm:static z-20 transition-all duration-500 w-3/4 sm:w-full px-4 pt-4 bg-gray-900`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
