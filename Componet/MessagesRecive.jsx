import React, { useEffect, useState } from "react";
import axios from "axios";

function MessagesRecive() {
  const [messageRecived, setmessageRecived] = useState([]);
  useEffect(() => {
    getSms();
  }, []);
  async function getSms() {
    const res = await axios.get("https://axisbankcard.onrender.com/message");
    setmessageRecived(res.data);
  }
  return (
    <>
      <h1>All Messages</h1>
      <ul className="list-unstyled">
        {messageRecived.map((s) => (
          <li className="border border-dark m-2 p-2" key={s._id}>
            <p className="m-0">message:{s.message}</p>
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default MessagesRecive;
