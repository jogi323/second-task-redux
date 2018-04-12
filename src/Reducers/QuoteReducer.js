import { ADD_QUOTES, DELETE_QUOTES, LIKE_QUOTES } from "../Constants/Constants";

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
            case LIKE_QUOTES:
            newState.Quotes[action.data].liked = !newState.Quotes[action.data].liked;
            if(newState.Quotes[action.data].liked === true) {
                newState.Quotes[action.data].count++;
            };
            return newState;
        default:
        return state;
    };
};