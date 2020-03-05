import { FC } from 'react';
import s from './index.module.css';

type ButtonProps = {
  text: string;
  disabled: boolean;
  className?: string;
  buttonClassName?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  buttonClassName,
  className,
  disabled,
}) => {
  const buttonClass = buttonClassName
    ? `${s.button} ${s.buttonClassName}`
    : s.button;

  if (disabled) {
    console.log('Disabled');
  }
  return (
    <div className={className}>
      <div className={buttonClass} onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

Button.defaultProps = {
  className: '',
  buttonClassName: '',
};

export default Button;
