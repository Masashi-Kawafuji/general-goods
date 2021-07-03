import React, { ReactEventHandler, useEffect, useState } from 'react';
import Label from './Label';

type TextAreaProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  validations?: {
    validate: (value: string) => boolean;
    message: string;
  }[];
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  onChange,
  label,
  validations,
}) => {
  const [isInitialValue, setIsInitialValue] = useState(true);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!isInitialValue) {
      validations?.forEach(({ validate, message }) => {
        if (validate(value)) {
          setErrorMessages(
            errorMessages.filter((errorMessage) => errorMessage !== message)
          );
        } else {
          setErrorMessages([...errorMessages, message]);
        }
      });
    }

    setIsInitialValue(false);
  }, [value]);

  const error = errorMessages.length > 0;

  const borderColor = error ? 'border-red-500' : 'border-lighten';

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
      {error &&
        errorMessages.map((errorMessage) => (
          <small className="text-danger">{errorMessage}</small>
        ))}
    </div>
  );
};

export default TextArea;
