import {combineReducers} from 'redux';
import { productReducer } from './productReducers';
import cartReducer from './cartReducers';
import {userReducer}  from './userReducers';

export const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    userReducer,
})