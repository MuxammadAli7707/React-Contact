import React from 'react';

const Output = ({username}) => {
  return (
    <div>
      <p className="result__text"><span className="result__span">FirstName:</span>{username}</p>
    </div>
  )
};


export default Output;