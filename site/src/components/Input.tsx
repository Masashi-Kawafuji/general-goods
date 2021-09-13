import { FC, ReactEventHandler } from 'react';
import useValidation, { Validation } from 'hooks/useValidation';
import Label from './Label';

type InputProps = {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  validations?: Validation<string>[];
};

const Input: FC<InputProps> = ({
  name,
  value,
  onChange,
  label,
  validations,
}) => {
  const errorMessages = useValidation<string>(validations, value);

  const error = errorMessages.length > 0;

  const borderColor = error ? 'border-red-500' : 'border-lighten';

  return (
    <div>
      <Label name={name} error={error}>
        {label}
      </Label>
      <input
        id={name}
        className={`block w-full px-2 py-2 bg-transparent text-lighten text-xs sm:text-sm font-light border-2 ${borderColor} focus:border-gray-50`}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
      {error &&
        errorMessages.map((errorMessage) => (
          <small key={errorMessage} className="text-danger">
            {errorMessage}
          </small>
        ))}
    </div>
  );
};

export default Input;
