import {
    IMG_CONFIG_SUCCESS,
    IMG_GET_POPULAR_SUCCESS,
    IMG_DATA_FAILED,
    IMG_GET_NOW_PLAYING_SUCCESS,
    IMG_GET_NOW_PLAYING_FAILED
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

const nowPlayingState = {
    get_now_playing: {},
    error: ""
};

export const getNowPlayingReducer = (state = nowPlayingState, action = {}) => {
    switch (action.type) {
        case IMG_GET_NOW_PLAYING_SUCCESS:
            return { ...state, get_now_playing: action.payload };
        case IMG_GET_NOW_PLAYING_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
