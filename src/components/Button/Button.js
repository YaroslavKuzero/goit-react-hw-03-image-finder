import React from 'react';

const Button = ({ handler }) => {
  return (<button className='Button' type='button' onClick={handler}>Load more</button>)
};

export default Button;