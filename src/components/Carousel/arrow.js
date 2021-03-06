import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import s from './arrow.module.css';

const Arrow = ({ onClick, isRight, className }) => (
  <div
    role="button"
    tabIndex="0"
    className={`${className} ${s.arrow} ${isRight ? s.rightArrow : ''}`}
    onClick={onClick}
    onKeyPress={onClick}
  >
    {isRight ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
  </div>
);

Arrow.defaultProps = {
  isRight: false,
  className: '',
};

Arrow.propTypes = {
  onClick: PT.func.isRequired,
  isRight: PT.bool,
  className: PT.string,
};

export default Arrow;
