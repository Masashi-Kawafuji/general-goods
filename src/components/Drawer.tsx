/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SetStateAction } from 'react';

type DrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => (
  <>
    <div
      className={`${
        !isOpen && 'hidden'
      } fixed inset-0 z-10 bg-gray-900 bg-opacity-50`}
      role="button"
      onClick={() => setIsOpen(false)}
    />
    <div
      className={`${
        !isOpen && '-left-full'
      } fixed left-0 inset-y-0 sm:block sm:static z-20 transition-all duration-500 w-3/4 sm:w-full px-4 pt-4 bg-gray-900`}
    >
      {children}
    </div>
  </>
);

export default Drawer;
