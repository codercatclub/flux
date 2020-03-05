import { FC } from 'react';
import s from "./Header.module.css";
import Link from 'next/link';

type HeaderProps = {
  className: string;
}

const Headed: FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={s.list}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/join">
          <a>Join</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Headed;
