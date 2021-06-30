import {
  FC,
  createElement,
  FunctionComponent,
  ComponentClass,
  HTMLAttributes,
} from 'react';

type ButtonProps = {
  as?: FunctionComponent<any> | ComponentClass<any>;
  inverse?: boolean;
} & HTMLAttributes<HTMLButtonElement> & { [key: string]: any };

const Button: FC<ButtonProps> = ({
  as,
  inverse,
  children,
  className,
  ...otherProps
}) => {
  const elementType = as || 'button';

  return createElement(
    elementType,
    {
      className: `${
        inverse
          ? 'bg-gray-900 text-darken border-2 border-gray-400 hover:text-lighten hover:border-gray-200'
          : 'bg-gray-300 hover:bg-gray-50 text-inverse'
      } inline-block px-3 py-1 sm:text-lg font-medium tracking-widest transition-colors duration-300 ${className}`,
      ...otherProps,
    },
    children
  );
};

export default Button;
