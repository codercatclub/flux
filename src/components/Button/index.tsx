import { FC } from 'react';
import s from './index.module.css';

type ButtonProps = {
  text: string;
  disabled?: boolean;
  className?: string;
  buttonClass?: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  buttonClass,
  className,
  disabled,
}) => {
  const buttonClassName =
    buttonClass !== '' ? `${s.button} ${buttonClass}` : s.button;

  return (
    <div className={className}>
      <button className={buttonClassName} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  className: '',
  buttonClass: '',
  disabled: false,
};

export default Button;
