import React from 'react';

type LabelProps = {
  name: string;
  error?: boolean;
};

const Label: React.FC<LabelProps> = ({ children, name, error }) => {
  const invalid = error || false;

  const textColor = invalid ? 'text-danger' : 'text-lighten';

  return (
    <label
      htmlFor={name}
      className={`inline-block pl-2 mb-2 ${textColor} text-xs sm:text-sm font-medium`}
    >
      {children}
    </label>
  );
};

export default Label;
