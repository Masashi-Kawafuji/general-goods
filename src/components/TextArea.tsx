import React, { ReactEventHandler } from 'react';

type TextAreaProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const TextArea: React.FC<TextAreaProps> = ({ name, value, onChange }) => (
  <textarea
    id={name}
    className="block w-full px-3 py-1 bg-transparent text-gray-300 text-sm sm:text-base border-2 border-gray-400 focus:border-gray-200"
    name={name}
    rows={8}
    value={value}
    onChange={onChange}
  />
);

export default TextArea;
