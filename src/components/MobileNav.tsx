import React, { HTMLAttributes } from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type MobileNavProps = {
  isOpen: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  className,
  children,
}) => (
  <div
    className={mergeCssClassName(
      className,
      !isOpen ? 'opacity-0 -z-10' : 'opacity-100 z-10',
      'fixed inset-0 bg-black transition duration-500'
    )}
  >
    {children}
  </div>
);

export default MobileNav;
