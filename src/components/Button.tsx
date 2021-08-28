import {
  FC,
  createElement,
  FunctionComponent,
  ComponentClass,
  HTMLAttributes,
  ComponentPropsWithoutRef,
} from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type SubstitutionalComponent = FunctionComponent<any> | ComponentClass<any>;

type ButtonProps = {
  as?: SubstitutionalComponent;
  primitive?: boolean;
  inverse?: boolean;
} & HTMLAttributes<HTMLButtonElement> &
  ComponentPropsWithoutRef<SubstitutionalComponent>;

const Button: FC<ButtonProps> = ({
  as,
  primitive,
  inverse,
  children,
  className,
  ...otherProps
}) => {
  const elementType = as || 'button';

  return createElement(
    elementType,
    {
      className: mergeCssClassName(
        primitive ? '' : 'border-2',
        inverse
          ? 'bg-black text-darken border-gray-400 hover:text-lighten hover:border-gray-200'
          : 'bg-gray-300 hover:bg-gray-50 text-inverse',
        'inline-block px-3 py-1 sm:text-lg tracking-widest transition-colors duration-300',
        className
      ),
      ...otherProps,
    },
    children
  );
};

export default Button;
