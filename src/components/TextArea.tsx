import React, { ReactEventHandler } from 'react';
import Label from './Label';

type TextAreaProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  error?: boolean;
  errorMessage?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  errorMessage,
}) => {
  const borderColor = error ? 'border-red-500' : 'border-gray-300';

  return (
    <div>
      <Label name={name} error={error}>
        {label}
      </Label>
      <textarea
        id={name}
        className={`block w-full px-2 py-2 bg-transparent text-gray-300 text-xs sm:text-sm font-light border-2 ${borderColor} focus:border-gray-50`}
        name={name}
        rows={8}
        value={value}
        onChange={onChange}
      />
      {error && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default TextArea;
