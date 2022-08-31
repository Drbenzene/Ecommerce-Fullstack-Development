import React from "react";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import {
  saveToLocalStorage,
} from "../utils/localStorage";

const EachProduct = ({ product, truncate, inCart }) => {
  const dispatches = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart, "The cart");

  const addToCartHandler = (item) => {
    dispatches(addToCart(item));
    let existingCart = JSON.parse(localStorage.getItem("cartItems"));



    if (existingCart === null || existingCart === undefined) {
      existingCart = []
      saveToLocalStorage("cartItems", item);
      existingCart.push(item);
      saveToLocalStorage("cartItems", existingCart);

      saveToLocalStorage("cartTotal", existingCart.length);

    } else if (existingCart !== null || existingCart.length > 0) {
      const existyes = existingCart.find((cartItem) => cartItem.id === item.id);
      if (existyes) {
        console.log("item already in cart ooooooooo");
        return;
      } else {
        existingCart.push(item);
        saveToLocalStorage("cartItems", existingCart);
        saveToLocalStorage("cartTotal", existingCart.length);
      }
    }
  };

  return (
    <div className="container">
      <div className="row row-cols-lg-5 justify-content-center align-items-center">
        {product.data.map((item) => (
          <div className="col-sm-4 mb-3 justify-content-center" key={item.id}>
            <div className="card">
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                width="100px"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title fs-6">
                  {truncate(item.title, 20, "...")}
                </h5>
                <p className="card-text"></p>
                <p className="fs-2 fw-bold">${item.price}</p>
                <p
                  className="btn btn-dark"
                  onClick={() => addToCartHandler(item)}
                >
                  ADD TO CART
                </p>
                {inCart === "" ? (<p className="alert alert-danger fw-bold" role="alert">Already In Cart</p>) :  " "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachProduct;
