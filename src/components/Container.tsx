import React, { HTMLAttributes } from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type ContainerProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div
    className={mergeCssClassName(
      className,
      'container mx-auto max-w-screen-lg px-8'
    )}
  >
    {children}
  </div>
);

export default Container;
