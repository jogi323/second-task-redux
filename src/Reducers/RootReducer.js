import { combineReducers } from "redux";
import QuoteReducer from "./QuoteReducer";

const RootReducer = combineReducers({
    Quotes: QuoteReducer
});

export default RootReducer;