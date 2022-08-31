import React from "react";
import AllProducts from "../components/Products";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  return (
<>
<Header />
    <div className="w-100 d-flex">
      <div className='' style={{width: '20%'}}>
        <SideBar />
      </div>

      <div className="" style={{width: '80%', marginTop: '5%'}}>
        <AllProducts />
      </div>
    </div>
    </>
  );
}

export default Products;
