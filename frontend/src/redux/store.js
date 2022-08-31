import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
import { rootReducer } from './reducers';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err){
        console.log(err);
    }
}

const loadFromLocalStorage = (state) => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === undefined) {
            return undefined
        }

        return JSON.parse(serializedState);
    } catch (err){
        console.log(err);
        return undefined
    }

}

const initialState = {}

const localCheck = (state) => {
    if (loadFromLocalStorage(initialState) === undefined || loadFromLocalStorage(initialState) === null) {
        return state
    } else {
        return loadFromLocalStorage(initialState)
    }
}
// localCheck(initialState)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

// store.subscribe(() => saveToLocalStorage(store.getState()))

export {store, loadFromLocalStorage, saveToLocalStorage}