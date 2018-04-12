import { ADD_QUOTES, DELETE_QUOTES } from "../constants/Constants";

const initialState = {
    Quotes: []
   
};

export default function(state=initialState,action){
    const newState = {...state};
    switch(action.type){
        case ADD_QUOTES:
            newState.Quotes.push(action.data);
            return newState;
        case DELETE_QUOTES:
            newState.Quotes.splice(action.data,1);
            return newState;
        default:
        return state;
    };
};