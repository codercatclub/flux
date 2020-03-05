import { useState, FC } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import s from './index.module.css'

interface APIErrorResponse {
  error: string;
}

type InputProps = {
  value: string;
  name: string;
  validationMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (
  name: string,
  validation: (value: string) => yup.StringSchema<string>,
  defaultValue: string,
): InputProps => {
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: val } = event.target;

    const schema = validation(value);

    schema
      .validate(val)
      .then(() => setError(''))
      .catch(err => setError(err.message));

    setValue(val);
  };

  return {
    value,
    name,
    validationMessage: error,
    onChange: handleInputChange,
  };
};

export const areInputsValid = (inputs: InputProps[]): boolean => {
  let valid = true;

  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];

    const isValue = !!input.value;
    const isError = !!input.validationMessage;

    if (isError || !isValue) {
      valid = false;
    }
  }

  return valid;
};

const handleSubscribe = (
  email: string,
  about: string,
  setError: (msg: string) => void,
  callback: () => void,
): void => {
  axios
    .post('http://localhost:9000/v1/subscribe', { email, about })
    .catch(err => {
      const { data }: { data: APIErrorResponse } = err.response;
      setError(data.error);
    });

  callback();
};

const Join: FC = () => {
  const emailProps = useInput('email', () => yup.string().email().required(), '');
  const aboutProps = useInput('about', () => yup.string().required(), '');
  const [requestError, setRequestError] = useState('');

  const allInputsValid = areInputsValid([emailProps, aboutProps]);

  return (
    <>
      <p>Join</p>
      <InputField {...emailProps} type="email" />
      <InputField {...aboutProps} type="about" />
      <Button
        text="Submit"
        className={s.button}
        disabled={allInputsValid}
        onClick={(): void =>
          handleSubscribe(
            emailProps.value,
            aboutProps.value,
            setRequestError,
            () => {
              console.log('[D] Clear inputs');
            },
          )
        }
      />
      <div>{requestError}</div>
    </>
  );
}

export default Join;
