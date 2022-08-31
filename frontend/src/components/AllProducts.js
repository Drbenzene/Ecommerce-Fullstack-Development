import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import EachProduct from "./EachProduct";

function AllProducts() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  const success = useSelector((state) => state.productReducer.success);
  const exist = useSelector((state) => state.cartReducer.exist);


useEffect(() => {
  dispatch(fetchProduct());
})

  // Truncate Function
  function truncate(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

  return loading ? (<p>Loading.....</p>) 
  : success === false ? (<p style={{backgroundColor:"red", padding: "20px"}}>Something Went Wrong. Please Try Again</p>) 
  : success === true ? (<EachProduct product={products} dispatch={dispatch}  truncate={truncate} inCart={exist} />) : ""
}

export default AllProducts