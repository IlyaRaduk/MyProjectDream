import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import mainPageReducer from "./mainPageReducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;