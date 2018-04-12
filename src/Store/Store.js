import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import  RootReducer from "../Reducers/RootReducer";

const middleWare = [thunk];
const initialState = {};

const Store = createStore(
    RootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare)
    )
);

export default Store;

