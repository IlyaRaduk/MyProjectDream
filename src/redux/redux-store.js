import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import mainPageReducer from "./mainPageReducer";
import wordsPageReducer from "./wordsPageReducer";
import wordProfilePageReducer from "./wordProfilePageReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    homePage: mainPageReducer,
    wordsPage: wordsPageReducer,
    wordProfilePage: wordProfilePageReducer,
    header: headerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(ThunkMiddleware)
));


export default store;