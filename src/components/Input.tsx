import React, { ReactEventHandler } from 'react';
import Label from './Label';

type InputProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  error?: boolean;
  errorMessage?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  errorMessage,
}) => {
  const isInvalid = error || false;

  const borderColor = isInvalid ? 'border-red-500' : 'border-gray-400';

  return (
    <div>
      <Label name={name} error={error}>
        {label}
      </Label>
      <input
        id={name}
        className={`block w-full px-2 py-2 bg-transparent text-gray-300 text-xs sm:text-sm font-light border-2 ${borderColor} focus:border-gray-200`}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
      {isInvalid && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default Input;
