import {LOGGED_IN_USER, LOGGED_OUT_USER,
    FETCH_USER_INFO_FAILURE, 
    FETCH_USER_INFO_SUCCESS, 
    FETCH_USER_INFO} from '../constants/userConstant'

const initialState = {
    userInfo: {},
    cartItems: [],
    loggedIn: false,
    loggedOut: true,
    orders: [],
    transactions: [],
    error: ""

}

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGGED_IN_USER:
            return {
                ...state,
                userInfo: action.payload,
                loggedIn: true,
                loggedOut: false,
            }
        case LOGGED_OUT_USER:
            return {
                ...state,
                userInfo: {},
                loggedIn: false,
                loggedOut: true,
            }

        default:
            return state
    }
}

export {userReducer};