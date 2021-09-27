import { FC, HTMLAttributes } from 'react';
import mergeCssClassName from 'utils/mergeCssClassName';

type DividerProps = Pick<HTMLAttributes<HTMLHRElement>, 'className'>;

const Divider: FC<DividerProps> = ({ className }) => (
  <hr className={mergeCssClassName(className, 'border-gray-400')} />
);

export default Divider;
