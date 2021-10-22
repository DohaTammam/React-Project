import { todoReducer } from './todo';
import { combineReducers } from "redux";
import { counterReducer } from './count';

export const rootReducers = combineReducers({
    todoReducer,
    counterReducer
})