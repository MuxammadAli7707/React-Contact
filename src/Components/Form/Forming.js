import React from 'react'
import './Form.css'

function Forming(props) {
  return (
    <div className="container">
      <div className="contact">
        <h1 className="contact__title text-capitalize mb-3">
          contact input
        </h1>
      </div>

      <div className="contact__box">
        <form id="form" className="form" onSubmit={props.formSubmit}>
          <div>
            <label className="form__label pb-2">
              First Name
              <input
                id="firstName"
                className="d-block form__input mt-1 mb-3"
                type="text"
                name="text"
                onChange={props.typeHandler}
                required
              />
            </label>
          </div>

          <div>
            <label className="form__label pb-2">
              Last Name
              <input
                id="lastName"
                className="d-block form__input mt-1 mb-3"
                type="text"
                name="text"
                onChange={props.typeHandler}
                required
              />
            </label>
          </div>

          <div>
            <label className="form__label pb-2">
              Phone Number
              <input
                id="number"
                className="d-block form__input mt-1 mb-4"
                type="number"
                name="number"
                placeholder="+9989"
                onChange={props.typeHandler}
                required
              />
            </label>
          </div>

          <label className="form__label pb-2">
            Relationship
            <select
              id="select"
              className="form-select mt-2 mb-4"
              aria-label="Filter category"
              onChange={props.typeHandler}
            >
              <option value=""></option>
              <option value="all">All</option>
              <option value="friends">Friends</option>
              <option value="family">Family</option>
              <option value="partner">Partners</option>
            </select>
          </label>

          <button id="send" className="btn btn-primary" type="submit">
            Submit form
          </button>

          <div className="contact mt-5">
            <h1 className="contact__title text-capitalize mb-3">contact list</h1>
          </div>

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
        </div> */}
        </form>
        
      </div>
  </div>
  )
}

export default Forming

