import React from 'react';
import './Form.css'
const Filter = (props) => {
  return (
    <div className="result__btns d-flex align-items-center justify-content-between mb-4 flex-wrap">
          <button id="all" onClick={props.sortFunc} type="button" className="result__btn active">
            All
          </button>
          <button id="fri" onClick={props.sortFunc} type="button" className="result__btn">
            Friends
          </button>
          <button id="fam" onClick={props.sortFunc} type="button" className="result__btn">
            Family
          </button>
          <button id="par" onClick={props.sortFunc} type="button" className="result__btn">
            Partners
          </button>
        </div>
  );
};

export default Filter;