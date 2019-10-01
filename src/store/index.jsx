import {applyMiddleware, createStore} from 'redux';
import { logger } from 'redux-logger';
import AppReducer from '../reducer/AppReducer';
import combineReducers from 'redux/src/combineReducers';
import SearchReducer from "../reducer/SearchReducer";

let reducers = combineReducers({
    app: AppReducer,
    search:SearchReducer
});


let store = createStore(reducers, applyMiddleware(logger));



export default store;