import { ADD_QUOTES, DELETE_QUOTES } from "../Constants/Constants";

const initialState = {
    Quotes: []
    // [{author:"Jogi",quote:"A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc."},{author:"Chinna",quote:"A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc."}]
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