import React from "react";
import "./Form.css";

function ListContact(props) {
  return (
    <div className="container">
      {/* <div className="contact">
        <h1 className="contact__title text-capitalize mb-3">contact list</h1>
      </div> */}
      <div className="result">
        {/* <div className="result__btns d-flex align-items-center justify-content-evenly mb-4 flex-wrap">
          <button id="all" type="button" className="result__btn active">
            All
          </button>
          <button id="fri" type="button" className="result__btn">
            Friends
          </button>
          <button id="fam" type="button" className="result__btn">
            Family
          </button>
          <button id="par" type="button" className="result__btn">
            Partners
          </button>
        </div>

        <div className="result__search">
          <input
            id="search"
            className="d-block form__search mt-1 mb-4"
            type="search"
            name="text"
            placeholder="Search"
            required
          />
        </div> */}

        <ul id="items" className="result__list">
          <li className="result__item all">
            <button className="result__del btn-dark text-capitalize">
              Delete
            </button>
            <p className="result__text">
              <span className="result__span">FirstName: {props.name}</span>
            </p>
            <p className="result__text">
              <span className="result__span">LastName: {props.lastName}</span>
            </p>
            <p className="result__text">
              <span className="result__span">Relationship: {props.typing} </span>
            </p>
            <p className="result__text">
              <span className="result__span">Number: +9989 {props.number}</span>
            </p>
          </li>
        </ul>
        {/* <div className="footer__box">
          <button id="clear" className="footer__clear btn-dark text-capitalize">
            Clear all
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ListContact;
