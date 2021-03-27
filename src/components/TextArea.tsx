import React, { ReactEventHandler } from 'react';

type TextAreaProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const TextArea: React.FC<TextAreaProps> = ({ name, value, onChange }) => (
  <textarea
    id={name}
    className="block w-full px-2 py-2 bg-transparent text-gray-300 text-xs sm:text-sm font-light border-2 border-gray-400 focus:border-gray-200"
    name={name}
    rows={8}
    value={value}
    onChange={onChange}
  />
);

export default TextArea;
