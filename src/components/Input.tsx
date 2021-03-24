import React, { ReactEventHandler } from 'react';

type InputProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input: React.FC<InputProps> = ({ name, value, onChange }) => (
  <input
    id={name}
    className="block w-full px-3 py-1 bg-transparent text-gray-300 text-sm sm:text-base border-2 border-gray-400 focus:border-gray-200"
    name={name}
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default Input;
