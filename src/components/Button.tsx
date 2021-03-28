import React, { ReactNode, ComponentProps } from 'react';

type ButtonProps = {
  variant: 'light' | 'dark';
  fullWidth?: boolean;
  as?: ReactNode;
} & ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fullWidth,
  as,
  type,
  onClick,
}) => {
  const tailwindColorClassName =
    variant === 'light'
      ? 'bg-gray-900 text-gray-400 border-gray-400 hover:text-gray-200 hover:border-gray-200'
      : 'bg-gray-300 hover:bg-gray-400 text-gray-900 border-gray-300 hover:border-gray-400 ';

  const Elm = as || 'button';

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`block ${
        fullWidth && 'w-full'
      } px-3 py-1 ${tailwindColorClassName} border-2 font-medium tracking-widest transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
