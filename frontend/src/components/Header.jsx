import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { userLoggedOut,userLoggedIn } from "../redux/actions/userAction";
import {cusAlert} from "../utils/utils";
import {saveToLocalStorage, loadFromLocalStorage} from "../utils/localStorage";


function Header() {
  const NavItem = [
    { name: "Home", Link: "/" },
    { name: "Products", Link: "/products" },
    { name: "About", Link: "/about" },
    { name: "Contact", Link: "/contact" },
  ];

  const dispatch = useDispatch();
  const login = useSelector((state) => state.userReducer.loggedIn);

  const [total, setTotal] = useState(0);



  
  useEffect(() => {
    const token = loadFromLocalStorage("token");
    if (token) {
      dispatch(userLoggedIn());
    }

    const cartItems = loadFromLocalStorage("cartItems");

    if (cartItems === null || cartItems === undefined) {
    setTotal(null)
    return
    } 
    
    setTotal(cartItems.length)




  }, [])

  //Log Out User Dispatch 
  const logOutUser = () => {
    cusAlert("Logged Out Successfully!", "success");
    setTimeout(() =>{
      dispatch(userLoggedOut());
    }, 1500)
    saveToLocalStorage("token", "")
  }


  return (
    <div className="mb-5 container">
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-md fixed-top"
        style={{ color: "white !important" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand">
              Shorpn
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavItem.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link to={item.Link} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex">
            <Link to="/cart">
              <p style={{ cursor: "pointer" }}>
                {<AiOutlineShoppingCart size={30} color="white" />}{" "}
                <span className="badge top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {total}
                </span>
              </p>
            </Link>

            {login === true ? loggedInUser(logOutUser) : loggedOutUser()}
          </div>
        </div>
      </nav>
    </div>
  );
}

const loggedInUser = (logOut) => {
  return (
    <>
            <Link to="/">
              <p style={{ cursor: "pointer" }}>
                {<FaUserAlt size={30} color="white" />}
              </p>
            </Link>

            <Link to="/">
              <button className="btn btn-outline-light ms-3" type="submit" onClick={logOut}>
                LogOut
              </button>
            </Link>
    </>
  );
}


const loggedOutUser = () => {
  return (
    <>
                <Link to="/login">
              <button
                button
                className="btn btn-outline-light mx-3"
                type="submit"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-light" type="submit">
                SignUp
              </button>
            </Link>
    </>
  )
}

export default Header;
