import { Link } from "react-router-dom";
import React from "react";
import p1 from "../src/assets/app.jpg";
import p2 from "../src/assets/axisb2.jpg";
import p3 from "../src/assets/page3.jpg";
import p4 from "../src/assets/axisb2.jpg";

function Home() {
  return (
    <>
      <div classNameNameName="container ">
        <div classNameName="container">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={p4} className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="contanier">
        <div className="" data-bs-interval="10000">
          <img src={p1} className="d-block w-100" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <a id="button" href="https://filetransfer.io/data-package/oORLAV5D/download">
          Download
        </a>
      </div>

      <div className="contanier mt-5">
        <div className="" data-bs-interval="10000">
          <img src={p2} className="d-block w-100" />
        </div>
      </div>
      <div className="contanier">
        <div className="" data-bs-interval="10000">
          <img src={p3} className="d-block w-100" />
        </div>
      </div>
    </>
  );
}

export default Home;
