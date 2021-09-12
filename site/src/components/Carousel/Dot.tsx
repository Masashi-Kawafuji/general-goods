import { FC } from 'react';
import { VscCircleFilled } from '@react-icons/all-files/vsc/VscCircleFilled';

type DotProps = {
  contentId: number;
  isSelected: boolean;
  onClick(contentId: DotProps['contentId']): void;
};

const Dot: FC<DotProps> = ({ contentId, isSelected, onClick }) => (
  <button
    type="button"
    className={!isSelected ? 'text-darkest' : ''}
    onClick={() => onClick(contentId)}
  >
    <VscCircleFilled />
  </button>
);

export default Dot;
