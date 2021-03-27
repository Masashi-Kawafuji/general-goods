import React from 'react';

type GridProps = {
  cols?: number;
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

function getCollectiveTailwindClassName({
  cols,
  mobile,
  tablet,
  desktop,
}: GridProps): string {
  const classNames: string[] = [];
  const getClassName = (c: number) => `grid-cols-${c}`;

  if (cols && mobile) classNames.push(getClassName(mobile));
  else if (cols) classNames.push(getClassName(cols));
  else if (mobile) classNames.push(getClassName(mobile));
  else classNames.push('grid-cols-none');

  if (tablet) classNames.push(`sm:${getClassName(tablet)}`);
  if (desktop) classNames.push(`md:${getClassName(desktop)}`);

  return classNames.join(' ');
}

const Grid: React.FC<GridProps> = ({
  children,
  cols,
  mobile,
  tablet,
  desktop,
}) => {
  const gridClassName = getCollectiveTailwindClassName({
    cols,
    mobile,
    tablet,
    desktop,
  });

  return (
    <div className={`grid ${gridClassName} gap-x-12 gap-y-6 sm:gap-y-10`}>
      {children}
    </div>
  );
};

export default Grid;
