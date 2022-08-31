import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { cusAlert } from "../utils/utils";
import {loadFromLocalStorage,saveToLocalStorage} from '../utils/localStorage'

function Cart() {
  const dispatch = useDispatch();
  const[cartItems,setCartItems] = useState([])
  const [token, setToken]=useState(null)
  
  
  // setTimeout(() => {
    

  // }, 1000)

  useEffect(() => {
    setToken(loadFromLocalStorage("token"));
    setCartItems( loadFromLocalStorage("cartItems"));

  //Total Price of Item In Cart

  }, []);



  const removeFromCartHandler = (id) => { 
    dispatch(removeFromCart(id));
    
    //Removing From Local Storage
    if(cartItems.length > 0){
      const newCartItems = cartItems.filter(item => item.id !== id);
      setCartItems(newCartItems);
      saveToLocalStorage("cartItems",newCartItems);
    }
    // setCartItems(cartItems.filter(item => item.id !== id));
    // saveToLocalStorage("cartItems",cartItems)

  }


  return cartItems === null  ? (<div className = "mt-5 fw-bold d-flex justify-content-center align-items-center fs-800" >NO ITEM IN CART</div>) :
      <EachCartItem cartItems={cartItems} removeFromCartHandler = {removeFromCartHandler} token={token}/>
 

}

const EachCartItem = ({ cartItems, removeFromCartHandler, token}) => {

  let totalPrice;
  if (cartItems.length > 0) {
    totalPrice = cartItems.reduce((a, b) => a + b.price, 0);
  } else {
    totalPrice = 0;
  }

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <div className="row w-100">
        <div className="col w-75">
          {cartItems.length <= 0  ? (
            <h1 className="mt-5">CART IS EMPTY</h1>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between p-4 mb-2 "
                  style={styles.cartBox}
                >
                  <div className="d-flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="100px"
                      height="100px"
                    />
                    <div>
                      <p className="fs-4  ps-3">{item.title}</p>
                    </div>
                  </div>
                  <div className="">
                    <span className="fs-5 fw-bold">${item.price}</span>
                    <div
                      onClick={() => removeFromCartHandler(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <p className=" mt-5 d-flex justify-content-end trash">
                        <BsTrash size={20} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="w-25 justify-content-end mt-5">
          <h3>Cart Summary</h3>
          <hr />
          <div className="d-flex justify-content-between">
            <h4>Subtotal </h4>
            <p className="fs-3 fw-bold">{parseFloat(totalPrice.toFixed(2))}</p>
          </div>
          <hr />

          {/* Checking if User Is Logged In and Cart's not empty before checking out  */}
          
          {cartItems === null  ? (
            <>
              <button className="btn btn-dark" onClick={() => cusAlert("No Item In Cart", "error")}>
                CHECKOUT ${parseFloat(totalPrice.toFixed(2))}
              </button>
              </>
          ) : token === null || token === undefined || token === "" ? (
            <>
            <button className="btn btn-dark" onClick={() => cusAlert("Please Login To Checkout", "error")}>
                CHECKOUT ${parseFloat(totalPrice.toFixed(2))}
              </button>
            </>
          ) : (            <>
            <button className="btn btn-dark" onClick={() =>  navigate("/checkout")}>
              CHECKOUT ${parseFloat(totalPrice.toFixed(2))}
            </button>
            </>)
          
          
          
          
          }
        </div>
      </div>
    </div>
  );
};

const styles = {
  cartBox: {
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    // padding: "10px",
  },
};

export default Cart;
