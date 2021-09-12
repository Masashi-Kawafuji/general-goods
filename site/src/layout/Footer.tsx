import { FC } from 'react';
import Divider from 'components/Divider';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-11 text-gray-400 text-center">
      <Divider />
      <small>
        &copy; Copyright {year} - General Goods. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
