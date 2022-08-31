import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART, EMPTY_CART, GET_ALL_CART_ITEMS} from "../constants/cartConstant";

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

const updateCart = (product) => {
    return {
        type: UPDATE_CART,
        payload: product
    }
}

const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}

const getAllCartItems = (cartItems) => {
    return {
        type: GET_ALL_CART_ITEMS,
        payload: cartItems
    }
}

export {addToCart, removeFromCart, updateCart, emptyCart, getAllCartItems};