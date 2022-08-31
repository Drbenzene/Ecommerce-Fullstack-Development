import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { loadFromLocalStorage } from "../redux/store.js";
import { useSelector, useDispatch } from "react-redux";
import EachProduct from "./EachProduct";


function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  const success = useSelector((state) => state.productReducer.success);

  //Accessing Cart Actions
  const exist = useSelector((state) => state.cartReducer.exist);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

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





//Each Product Mapped Successfully

// const EachProduct = ({ product, truncate, dispatch, inCart }) => {

//   return (
//     <div className="container">
//       <div className="row row-cols-lg-5 row-cols-sm-3">
//         {product.data.map((item) => (
//           <div className="col mb-3" key={item.id}>
//             <div className="card">
//               <img
//                 src={item.image}
//                 className="card-img-top"
//                 alt="..."
//                 width="100px"
//                 height="200px"
//               />
//               <div className="card-body">
//                 <h5 className="card-title fs-6" >
//                   {truncate(item.title, 20, "...")}
//                 </h5>
//                 <p className="card-text">

//                 </p>
//                 <p className="fs-2 fw-bold">${item.price}</p>
//                 <p className="btn btn-dark" onClick={() => dispatch(addToCart(item))}>ADD TO CART</p>
//                 {inCart === "" ? (<p className="alert alert-danger fw-bold" role="alert">Already In Cart</p>) :  " "}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Products;

