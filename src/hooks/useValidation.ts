import { useState, useEffect } from 'react';

export type Validation<T> = {
  validate: (value: T) => boolean;
  message: string;
};

type ErrorMessage = string;

export default function useValidation<T>(
  validations: Validation<T>[] | undefined,
  value: T
): ErrorMessage[] {
  const [isInitialValue, setIsInitialValue] = useState(true);
  const [errorMessages, setErrorMessages] = useState<ErrorMessage[]>([]);

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
    } else {
      setIsInitialValue(false);
    }
  }, [value]);

  return errorMessages;
}
