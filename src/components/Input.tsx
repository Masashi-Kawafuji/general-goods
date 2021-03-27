import React, { ReactEventHandler } from 'react';

type InputProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input: React.FC<InputProps> = ({ name, value, onChange }) => (
  <input
    id={name}
    className="block w-full px-2 py-2 bg-transparent text-gray-300 text-xs sm:text-sm font-light border-2 border-gray-400 focus:border-gray-200"
    name={name}
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default Input;
