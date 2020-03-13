import React, { useRef } from 'react';
import { PropTypes as PT } from 'prop-types';
import Arrow from './arrow';
import s from './styles.module.css';

export const animate = ({ timing, draw, duration }) => {
  const start = performance.now();

  // eslint-disable-next-line no-shadow
  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    const progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

// eslint-disable-next-line
export const easeOutCubic = t => --t * t * t + 1;

export const fitRange = (value, low1, high1, low2, high2) =>
  low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

const renameKey = (obj, oldKey, newKey) => {
  const newObj = { ...obj };
  if (oldKey !== newKey && oldKey in obj) {
    Object.defineProperty(
      newObj,
      newKey,
      Object.getOwnPropertyDescriptor(newObj, oldKey),
    );
    delete newObj[oldKey];
  }
  return newObj;
};

const Carousel = ({ children, height, className }) => {
  const carouselRef = useRef(null);
  const scrollAmount = 612;
  const carouserStyle = {
    gridTemplateColumns: `repeat(${children.length}, 300px)`,
    gridTemplateRows: `${height}px`,
  };

  if (children && children.length === 0) {
    return <div>No content</div>;
  }

  const handleArrowClick = scrollIncrement => {
    const sl = carouselRef.current.scrollLeft;
    const scrollFrom = sl;
    const scrollTo = sl + scrollIncrement;

    animate({
      duration: 1500,
      timing(t) {
        return easeOutCubic(t);
      },
      draw(progress) {
        const pos = fitRange(progress, 0, 1, scrollFrom, scrollTo);

        if (carouselRef.current) {
          carouselRef.current.scrollLeft = pos;
        }
      },
    });
  };

  return (
    <div className={className}>
      <div className={s.carouselContainer}>
        <Arrow
          className={s.arrow}
          onClick={() => handleArrowClick(-scrollAmount)}
        />
        <Arrow
          className={s.arrow}
          onClick={() => handleArrowClick(scrollAmount)}
          isRight
        />

        <div ref={carouselRef} className={s.carousel} style={carouserStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  height: 180,
  className: '',
};

Carousel.propTypes = {
  children: PT.arrayOf(PT.node).isRequired,
  height: PT.number,
  className: PT.string,
};

export default (Carousel);
