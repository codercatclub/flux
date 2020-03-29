import { FC } from 'react';
import s from "./index.module.css";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div>© 2020 Flux.</div>
      <div>
        Made by{' '}
        <a href="https://codercat.tk" target="_blank" rel="noopener noreferrer">
          CODERCAT
        </a>
      </div>
    </div>
  );
};

export default Footer;
