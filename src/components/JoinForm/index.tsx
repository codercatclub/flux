import { useState, FC } from 'react';
import axios, { AxiosResponse } from 'axios';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import s from './index.module.css';

const API_URL = process.env.isProd
  ? 'https://codercat.tk/api/'
  : 'http://localhost:9000/';

interface APIErrorResponse {
  error: string;
}

type InputProps = {
  value: string;
  name: string;
  validationMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type Question = {
  key: string;
  value: string;
};

export const useInput = (
  name: string,
  validation: (value: string) => yup.StringSchema<string>,
  defaultValue: string,
): InputProps => {
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
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

const join = (
  email: string,
  fields: {key: string; props: InputProps}[],
  onSuccess: (res: AxiosResponse) => void,
  onFailure: (msg: string) => void,
): void => {

  const questions = fields.map((i): Question => ({
    key: i.key,
    value: i.props.value,
  }));

  axios
    .post(`${API_URL}v1/subscribe`, { email, questions })
    .then(res => {
      onSuccess(res);
    })
    .catch(err => {
      if (!err.response) {
        onFailure("Something went wrong. Check your connection.");
      } else {
        const { data }: { data: APIErrorResponse } = err.response;
        onFailure(data.error);
      }
    });
};

type JoinFormProps = {
  containerClass: string;
};

const JoinForm: FC<JoinFormProps> = ({ containerClass }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailProps = useInput(
    'email',
    () =>
      yup
        .string()
        .email()
        .required(),
    '',
  );
  const interestsProps = useInput(
    'interests',
    () => yup.string().required(),
    '',
  );
  const projectProps = useInput('project', () => yup.string().required(), '');
  const socialProps = useInput('social', () => yup.string().required(), '');
  const [requestError, setRequestError] = useState('');

  const allInputsValid = areInputsValid([
    emailProps,
    interestsProps,
    projectProps,
    socialProps,
  ]);

  const handleSuccess = (): void => setIsSubmitted(true);

  const questions = [
    {
      key: 'What are your interests?',
      props: interestsProps,
    },
    {
      key: 'Do you have a project to work on during Flux event?',
      props: projectProps,
    },
    {
      key: 'Link to Instagram, Facebook or personal site',
      props: socialProps,
    },
  ];

  return (
    <div className={containerClass}>
      <InputField
        {...emailProps}
        type="email"
        className={s.input}
        disabled={isSubmitted}
      />
      {questions.map(i => (
        <InputField
          key={i.key}
          {...i.props}
          type="text"
          placeholder={i.key}
          className={s.input}
          disabled={isSubmitted}
        />
      ))}
      <ErrorMessage className={s.apiError} text={requestError} />
      {isSubmitted ? (
        <div className={s.successMessage}>
          Thank you for your submission. We will contact your shortly! 👻
        </div>
      ) : (
        <Button
          text="Submit"
          buttonClass={s.submitButton}
          disabled={!allInputsValid}
          onClick={(): void => {
            setRequestError('');
            join(emailProps.value, questions, handleSuccess, setRequestError);
          }}
        />
      )}
    </div>
  );
};

export default JoinForm;
