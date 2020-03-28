import { FC } from 'react';
import s from './index.module.css';

type ErrorMessageProps = {
  text: string;
  className?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ text, className }) => (
  <div className={`${s.text} ${className}`}>{text}</div>
);

ErrorMessage.defaultProps = {
  className: '',
}

export default ErrorMessage;
