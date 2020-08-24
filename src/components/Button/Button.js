import React from 'react';
import PropTypes from 'prop-types'


const Button = ({ handler }) => {
  return (<button className='Button' type='button' onClick={handler}>Load more</button>)
};

Button.PropTypes = {
  handler: PropTypes.func.isRequired,
}
export default Button;