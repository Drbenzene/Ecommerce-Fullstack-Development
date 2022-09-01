import axios from 'axios';
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FILTER_PRODUCT
 } from '../constants/productConstant';

const baseUrl = window.location.origin
console.log(window.location.origin, "The Windows")

const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST,
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: products,
    }
}

const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error.message,
    }
}

const filterProduct = (category) => {
    return {
        type: FILTER_PRODUCT,
        payload: category
    }
}


const fetchProduct = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchProductsRequest());
            const response = await axios.get(`${baseUrl}/api/products/all`);
            const data = response.data
            console.log(data, "data");

            dispatch(fetchProductsSuccess(data));
        } catch(err) {
            console.log(err)
            dispatch(fetchProductsFailure(err));
        }
    }
}


export {fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure, fetchProduct, filterProduct };