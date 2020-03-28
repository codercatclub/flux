import { FC, useState } from 'react';
import s from './index.module.css';
import Arrow from '../Carousel/arrow';

type ImageGridProps = {
  urls: string[];
};

const ImageGrid: FC<ImageGridProps> = ({ urls }) => {
  const [curIndex, setCurIndex] = useState(0);
  const curUrl = urls[curIndex];

  return (
    <div className={s.container} style={{ backgroundImage: `url(${curUrl})` }}>
      <Arrow
        className={s.arrow}
        onClick={() => {
          curIndex !== 0
            ? setCurIndex(curIndex - 1)
            : setCurIndex(urls.length - 1);
        }}
      />
      <Arrow
        className={s.arrow}
        onClick={() => {
          curIndex < urls.length - 1
            ? setCurIndex(curIndex + 1)
            : setCurIndex(0);
        }}
        isRight
      />
    </div>
  );
};

export default ImageGrid;
