import { LOGGED_IN_USER, LOGGED_OUT_USER } from "../constants/userConstant";
import axios from "axios";


const userLoggedIn = (user) => {
    return {
        type: LOGGED_IN_USER,
        payload: user
    };

}

const userLoggedOut = (user) => {
    return {
        type: LOGGED_OUT_USER,
        payload: user
    };
}

//Fetch the user Infomation 
const fetchUserInfo = (email) => {
    return async (dispatch)  => {
        try {
            const res = await axios.get("/api/user/info", email);
            console.log(res)
            dispatch(userLoggedIn(res.data));

        } catch (error) {
            console.log(error)  
            dispatch(userLoggedOut(error.message));
        }
    }
}


export { userLoggedIn, userLoggedOut, fetchUserInfo };