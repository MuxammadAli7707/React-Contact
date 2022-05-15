import React from 'react';

const Input = ({changed}) => {
  return (
    <div>
    <label className="form__label pb-2">
      First Name
      <input
        id="firstName"
        className="d-block form__input mt-1 mb-3"
        type="text"
        name="text"
        onChange={changed} 
        required
      />
    </label>
  </div>
  );
};

export default Input;