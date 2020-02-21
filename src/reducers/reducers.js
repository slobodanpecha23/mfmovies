import {
    CONFIG_SUCCESS,
    POPULAR_DATA_SUCCESS,
    IMG_DATA_FAILED,
    NOW_PLAYING_DATA_SUCCESS,
    NOW_PLAYING_DATA_FAILED,
    TOP_RATED_DATA_SUCCESS,
    TOP_RATED_DATA_FAILED,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_DETAIL_FAILED,
    CAST_SUCCESS,
    CAST_FAILED
} from "../constants/action_types";

const initialState = {
    config: {},
    popular: {},
    error: ""
};

export const getImgDataReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONFIG_SUCCESS:
            return { ...state, config: action.payload };
        case POPULAR_DATA_SUCCESS:
            return { ...state, popular: action.payload };
        case IMG_DATA_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const nowPlayingState = {
    now_playing: {},
    error: ""
};

export const getNowPlayingReducer = (state = nowPlayingState, action = {}) => {
    switch (action.type) {
        case NOW_PLAYING_DATA_SUCCESS:
            return { ...state, now_playing: action.payload };
        case NOW_PLAYING_DATA_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const topRatedState = {
    top_rated: {},
    error: ""
};

export const getTopRatedReducer = (state = topRatedState, action = {}) => {
    switch (action.type) {
        case TOP_RATED_DATA_SUCCESS:
            return { ...state, top_rated: action.payload };
        case TOP_RATED_DATA_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const movieDetailState = {
    movie_detail: {},
    cast: {},
    error: ""
};

export const movieDetailReducer = (state = movieDetailState, action = {}) => {
    switch (action.type) {
        case MOVIE_DETAIL_SUCCESS:
            return { ...state, movie_detail: action.payload };
        case MOVIE_DETAIL_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const castReducer = (state = movieDetailState, action = {}) => {
    switch (action.type) {
        case CAST_SUCCESS:
            return { ...state, cast: action.payload };
        case CAST_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
