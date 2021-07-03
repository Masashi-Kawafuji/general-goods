/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { HTMLAttributes, SetStateAction } from 'react';

type DrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  setIsOpen,
  className,
  children,
}) => (
  <div className={className}>
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
      } fixed left-0 px-6 w-3/4 inset-y-0 z-20 transition-all duration-500 bg-gray-900`}
    >
      {children}
    </div>
  </div>
);

export default Drawer;
