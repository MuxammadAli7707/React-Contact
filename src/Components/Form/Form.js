import React from "react";
import './Form.css'
import Input from "./Input";
import Lastname from "./Lastname";
import OuputLastname from "./OuputLastname";
import Output from "./Output";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      lastname: ''
    };
  }

  usernameChanged = (event) => {
    this.setState({username: event.target.value})
  }
  userlastnameChanged = (even) => {
    this.setState({lastname: even.target.value})
  } 

  render() {
    return (
      <div className="container">
        <div className="full">
          <div className="contact">
            <h1 className="contact__title text-capitalize mb-3">
              contact management
            </h1>
          </div>

          <div className="contact__box d-flex">
            <form id="form" className="form">
              <Input changed={this.usernameChanged}  />
              {/* <div>
                <label className="form__label pb-2">
                  First Name
                  <input
                    id="firstName"
                    className="d-block form__input mt-1 mb-3"
                    type="text"
                    name="text"
                    required
                  />
                </label>
              </div> */}

              <Lastname changed={this.userlastnameChanged} />
              {/* <div>
                <label className="form__label pb-2">
                  Last Name
                  <input
                    id="lastName"
                    className="d-block form__input mt-1 mb-3"
                    type="text"
                    name="text"
                    required
                  />
                </label>
              </div> */}

              <div>
                <label className="form__label pb-2">
                  Phone Number
                  <input
                    id="number"
                    className="d-block form__input mt-1 mb-4"
                    type="number"
                    name="number"
                    placeholder="+9989"
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
                >
                  <option value="all">All</option>
                  <option value="friends">Friends</option>
                  <option value="family">Family</option>
                  <option value="partner">Partners</option>
                </select>
              </label>

              <button id="send" className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>

            <div className="result">
              <div className="result__btns d-flex align-items-center justify-content-evenly mb-4 flex-wrap">
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
              </div>

              <ul id="items" className="result__list">
                <li className="result__item all">
                  <button className="result__del btn-dark text-capitalize">Delete</button>
                  <Output username={this.state.username} />
                  <OuputLastname lastname={this.state.lastname} />
                  {/* <p className="result__text"><span className="result__span">FirstName:</span> {user}</p> */}
                  {/* <p className="result__text"><span className="result__span">LastName:</span> dffd</p> */}
                  <p className="result__text"><span className="result__span">Number:</span> 998999988989</p>
                </li>
              </ul>
              <div className="footer__box">
                <button
                  id="clear"
                  className="footer__clear btn-dark text-capitalize"
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
