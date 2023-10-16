import React from 'react';
import './Cards.css';

const Card = ({children}) => {  // Ensure the correct prop name (Children instead of Children)
  return (
    <div className='styleEachItems'>
      {children}
    </div>
  );
};

export default Card;

