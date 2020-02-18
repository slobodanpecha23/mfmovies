import {
    IMG_CONFIG_SUCCESS,
    IMG_GET_POPULAR_SUCCESS,
    IMG_DATA_FAILED
} from "../constants/action-types";

const initialState = {
    img_config: {},
    get_popular: {},
    error: ""
};

export const getImgDataReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case IMG_CONFIG_SUCCESS:
            return { ...state, img_config: action.payload };
        case IMG_GET_POPULAR_SUCCESS:
            return { ...state, get_popular: action.payload };
        case IMG_DATA_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
