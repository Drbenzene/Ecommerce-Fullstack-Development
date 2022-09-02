import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import axios from "axios";
import {cusAlert} from "../utils/utils"
import { useNavigate } from "react-router-dom";


function Signup() {
    const [user, setUser] = useState([])

    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user)
    }


    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(user, "User On Submit")
        const url = "/api/users/register";

        try {
          const res = await axios.post(url, user)
          console.log(res, "The Response")
          cusAlert("Registered Successfully", "success")
          setTimeout(() => navigate("/login"), 1500)

        } catch (err) {
          cusAlert(err.response.data.error, "error")
        }
    }


  return (
    <div>
      Signup
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-12">
            <div className="heading">
              <h2>Signup</h2>
            </div>
            <form method="post" action="" onSubmit={submitHandler} >
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                    name="firstName"
                    value={user.firstName}
                    onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                    name="lastName"
                    value={user.lastName}
                    onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={changeHandler}
                  required
                />
                </div>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control btn btn-dark"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
