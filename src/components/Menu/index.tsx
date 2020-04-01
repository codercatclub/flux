import { FC } from 'react';
import Link from 'next/link';
import s from './index.module.css';
import { prefix } from '../../utils';

type MenuProps = {
  activeRoute: string;
}

const Menu: FC<MenuProps> = ({ activeRoute }) => {
  const items = [
    { name: '.Home', path: '/' },
    { name: '.About', path: '/about' },
  ];

  const menuElements = items.map(i => (
    <Link key={i.name} href={prefix(i.path)}>
      <a
        className={s.menuItem}
        style={activeRoute === i.path ? { color: 'rgb(14, 225, 221)' } : {}}
      >
        {i.name}
      </a>
    </Link>
  ));

  return <div className={s.menu}>{menuElements}</div>;
};

export default Menu;
