// External Dependencies
import _ from 'lodash';
import PropTypes from 'prop-types';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const FlashSliderButton = ({ width }) => {
  return (
    <div className='bg-red-300'>
      <p >Flash Slider Button</p>
    </div>
  )
}

export default FlashSliderButton;

FlashSliderButton.propTypes = {
  width: PropTypes.number.isRequired
}