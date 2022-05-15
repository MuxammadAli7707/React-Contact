import React from "react";
const Lastname = ({changed}) => {
  return (
    <div>
      <label className="form__label pb-2">
        Last Name
        <input
          id="lastName"
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

export default Lastname;
