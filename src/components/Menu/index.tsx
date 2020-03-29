import { FC } from 'react';
import Link from 'next/link';
import s from './index.module.css';
import Router from 'next/router';
import { prefix } from '../../utils';

const Menu: FC = () => {
  const items = [
    { name: '.Home', path: '/' },
    { name: '.About', path: '/about' },
  ];

  let pathname = '/';
  if (process.browser) {
    pathname = Router.pathname;
  }

  console.log('[D] pathname: ', pathname);

  const menuElements = items.map(i => (
    <Link key={i.name} href={prefix(i.path)}>
      <a
        className={s.menuItem}
        style={i.path === pathname ? { color: "rgb(14, 225, 221)" } : {}}
      >
        {i.name}
      </a>
    </Link>
  ));

  return <div className={s.menu}>{menuElements}</div>;
};

export default Menu;
