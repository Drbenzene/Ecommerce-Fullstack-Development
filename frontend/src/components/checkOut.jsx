import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import countries from "../utils/countries";
import { uniqueId } from "../utils/utils.js";
import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage} from "../utils/localStorage";
import axios from "axios";

function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({});

  let total
  if (cartItems.length > 0) {
    total = cartItems.reduce((a, b) => a + b.price, 0);
  } else {
    total = 0;
  }


  const shipping = total / 30;

  useEffect(() => {
    setCartItems(loadFromLocalStorage("cartItems"));

  }, []);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "country") {
      setFormData({ ...formData, country: value });
    }

    setFormData({
      ...formData,
      TRXID: uniqueId(),
      cartItems: cartItems,
      [name]: value,
      total: (total + shipping).toFixed(2),
    });
    console.log(formData, "formData");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    //Saving Address In DataBase
    try {
      // const res =
      const res = await axios.post(
        "http://localhost:5000/api/payment",
        formData
      );

      //Parese the response to JSON

      const redirect = res.data.data.link
      window.location.href = `${redirect}`;
      // navigate(redirect)

      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <header className="p-5">
        <h3>Checkout</h3>
      </header>
      <main>
        <section className="checkout-form">
          <form action="#!" method="post" onSubmit={submitHandler}>
            <h6>Contact information</h6>
            <div className="form-control">
              <label htmlFor="checkout-email">E-mail</label>
              <div>
                <span className="fa fa-envelope" />
                <input
                  type="email"
                  id="checkout-email"
                  name="email"
                  placeholder="Enter your email..."
                  value={formData.email}
                  onChange={handlerChange}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="checkout-phone">Phone</label>
              <div>
                <span className="fa fa-phone" />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter you phone..."
                  value={formData.phone}
                  onChange={handlerChange}
                  required
                />
              </div>
            </div>
            <br />
            <h6>Shipping address</h6>
            <div className="form-control">
              <label htmlFor="checkout-name">Full name</label>
              <div>
                <span className="fa fa-user-circle" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter you name..."
                  value={formData.name}
                  onChange={handlerChange}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="checkout-address">Address</label>
              <div>
                <span className="fa fa-home" />
                <input
                  type="text"
                  name="address"
                  id="checkout-address"
                  placeholder="Your address..."
                  value={formData.address}
                  onChange={handlerChange}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="checkout-city">City</label>
              <div>
                <span className="fa fa-building" />
                <input
                  type="text"
                  name="city"
                  id="checkout-city"
                  placeholder="Your city..."
                  value={formData.city}
                  onChange={handlerChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-control">
                <label htmlFor="country">Country</label>
                <div>
                  <span className="fa fa-globe" />
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Your country..."
                    list="country-list"
                    onChange={handlerChange}
                  />
                  <datalist id="country-list">
                    {countries.map((country) => (
                      <option key={country.name} value={country.name} />
                    ))}
                  </datalist>
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="postal">Postal code</label>
                <div>
                  <span className="fa fa-archive" />
                  <input
                    type="numeric"
                    name="postal"
                    id="checkout-postal"
                    placeholder="Your postal code..."
                    value={formData.postal}
                    onChange={handlerChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control checkbox-control">
              <input
                type="checkbox"
                name="checkout-checkbox"
                id="checkout-checkbox"
              />
              <label htmlFor="checkout-checkbox">
                Save this information for next time
              </label>
            </div>
            <div className="form-control-btn">
              <button className="btn btn-primary btn-dark">Continue</button>
            </div>
          </form>
        </section>
        <section className="checkout-details">
          <div className="checkout-details-inner">
            <div className="checkout-lists">
              {cartItems.map((item) => (
                <div key={item.id} className="card">
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-details">
                    <div className="card-name">{item.title}</div>
                    <div className="card-price">
                      ${item.price} <span>${(item.price * 3).toFixed()}</span>
                    </div>
                    <div className="card-wheel">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-shipping">
              <h6>Shipping</h6>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="checkout-total">
              <h6>Total</h6>
              <p>${(total + shipping).toFixed(2)}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CheckOut;
