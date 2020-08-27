import React from 'react';
import PropTypes from 'prop-types';


export default function Button({ handler }) {
  return (
    <button className='Button' type='button' onClick={handler}>Load more</button>
  );
}

Button.propTypes = {
  handler: PropTypes.func,
}
