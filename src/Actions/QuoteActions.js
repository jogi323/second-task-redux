import { ADD_QUOTES, DELETE_QUOTES } from "../constants/Constants";

export const AddQuotes = (data) => (dispatch) => {
    dispatch({
        type: ADD_QUOTES,
        data: data
    });
};

export const DeleteQuotes = (data) => (dispatch) => {
    dispatch({
        type: DELETE_QUOTES,
        data: data
    });
};

export const LikeQuotes = (data) => (dispatch) => {
    dispatch({
        type: ADD_QUOTES,
        data: data
    });
};