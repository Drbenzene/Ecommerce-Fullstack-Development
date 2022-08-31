import React from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex">
      <div className="row">
        <Header />
      </div>
      <div className="row mt-5 d-flex justify-content-center align-content-center align-items-center">
        <div className="col d-grid p-5 mt-5 align-content-center">
        <h1> PAGE NOT FOUND</h1>
        <Link to="/">
          <button className="btn btn-dark">GO HOME</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default NotFound;
