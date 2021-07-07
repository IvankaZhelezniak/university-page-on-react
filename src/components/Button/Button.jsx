import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './Button.styles';

function Button({ text }) {
  return <CustomButton>{text}</CustomButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
