import React,{ useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import axios from "axios";
import {useDispatch} from "react-redux";
import { cusAlert } from "../utils/utils";
import {useNavigate} from "react-router-dom";
import {userLoggedIn} from "../redux/actions/userAction";
import {saveToLocalStorage} from "../utils/localStorage";

function Login() {
  const dispatch = useDispatch()
    const [user, setUser] = useState([])
    const navigate = useNavigate()



    //Input Change Handler
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user, "On Login Submit ")
    }
    //End Of Input Change Handler

    //Login Function 
    const loginHandler = async (e) => {
      e.preventDefault();
      try {
        const url="http://localhost:5000/api/users/login";
        const res = await axios.post(url, user)
        console.log(res, "The Response")
        cusAlert("Login Successfully", "success")

        setTimeout(() => {
          navigate("/")
        }, 1500); 

        saveToLocalStorage("token", res.data.data.token )
        saveToLocalStorage("isLoggedIn", true )
        dispatch(userLoggedIn())


      } catch (err) {
        console.log(err)
        cusAlert(err.response.data.error, "error")
      }
    }
    //End Of Login Function

  return (
    <>
    <Header />
    <div className="container">
      <div className="mt-5 pt-5"></div>
      <div className="row mt-5 justify-content-center">

 
      <div className="col-md-5 col-sm-12">
        <div className="heading">
          <h2>Login</h2>
        </div>
        <form method="post" onSubmit={loginHandler}>
          <div className="form- mb-3">
            <input
              className="form-control"
              name="email"
              value={user.email}
              type="email"
              placeholder="Email"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control"
              name="password"
              value={user.password}
              type="password"
              placeholder="Password"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control btn btn-outline-primary"
              type="submit"
            />
          </div>
        </form>
      </div>
      <div className="col-md-2 col-sm-12" />
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default Login;
