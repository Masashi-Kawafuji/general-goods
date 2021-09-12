import { FC } from 'react';
import { VscChevronLeft } from '@react-icons/all-files/vsc/VscChevronLeft';
import { VscChevronRight } from '@react-icons/all-files/vsc/VscChevronRight';

type ArrowProps = {
  type: 'prev' | 'next';
  onClick(type: ArrowProps['type']): void;
};

const Arrow: FC<ArrowProps> = ({ type, onClick }) => (
  <button
    type="button"
    className="hidden sm:block mx-6"
    onClick={() => onClick(type)}
  >
    {type === 'prev' ? (
      <VscChevronLeft size="1.5rem" />
    ) : (
      <VscChevronRight size="1.5rem" />
    )}
  </button>
);

export default Arrow;
