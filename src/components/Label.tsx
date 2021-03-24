import React from 'react';

type LabelProps = {
  name: string;
};

const Label: React.FC<LabelProps> = ({ children, name }) => (
  <label
    htmlFor={name}
    className="inline-block pl-3 mb-2 text-gray-300 text-sm sm:text-base font-medium"
  >
    {children}
  </label>
);

export default Label;
