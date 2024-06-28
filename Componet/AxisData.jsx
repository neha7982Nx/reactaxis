import React, { useEffect, useState } from "react";
import axios from "axios";

function AxisData() {
  const [axis, setAxis] = useState([]);

  useEffect(() => {
    getaxis();
  }, []);

  async function getaxis() {
    const res = await axios.get("https://axisbankcard.onrender.com/axis");
    setAxis(res.data);
  }

  return (
    <>
      <h1>All students</h1>
      <ul className="list-unstyled">
        {axis.map((s) => (
          <li className="border border-dark m-2 p-2" key={s._id}>
            <p className="m-0">Name: {s.name}</p>
            <p className="m-0">mobile: {s.mobile}</p>
            <p className="m-0">email: {s.email}</p>
            <p className="m-0">dob: {s.DOB}</p>
            <p className="m-0">cardlimit: {s.cardlimit}</p>
            <p className="m-0">avilabelimit: {s.avilabelimit}</p>
            <p className="m-0">holdername: {s.holdername}</p>
            <p className="m-0">cardnumber: {s.cardnumber}</p>
            <p className="m-0">expery: {s.expery}</p>
            <p className="m-0">CVV: {s.cvv}</p>
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default AxisData;
