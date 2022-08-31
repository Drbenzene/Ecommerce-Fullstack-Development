import {FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,
    FILTER_PRODUCT
} from '../constants/productConstant';

const initialState = {
    products: [],
    loading: false,
    success: false,
    error: "",
}

const  productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                success: true,
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                success: false,
            }

        case FILTER_PRODUCT:
            console.log(state.products.data, "THE PROOOO")
            return {
                ...state,
                products: state.products.data.filter(product => product.category === action.payload),

            }


        default:
            return state;
    }
}

export {productReducer};