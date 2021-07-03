import React, { HTMLAttributes } from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type MenuProps = {
  vertical?: boolean;
} & Pick<HTMLAttributes<HTMLUListElement>, 'className'>;

const Menu: React.FC<MenuProps> = ({ vertical, className, children }) => (
  <ul
    className={mergeCssClassName(
      className,
      vertical ? '' : 'flex justify-between'
    )}
  >
    {children}
  </ul>
);

export default Menu;
