import { FC } from 'react';
import Header from '../../components/Header';
import s from './index.module.css';

const Index: FC = () => {
  return (
    <div className={s.layout}>
      <div className={s.overlay} />
      <Header className={s.header} />
      <div className={s.titleBlock}>
        <h1>flux</h1>
        <h2>station</h2>
      </div>
      <video className={s.video} loop muted>
        <source src="web_back_01.mp4" />
      </video>
    </div>
  );
};

export default Index;
