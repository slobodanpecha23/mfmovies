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
    CAST_FAILED,
    ACTOR_DETAILS_SUCCESS,
    ACTOR_DETAILS_FAILED,
    ACTOR_MOVIES_SUCCESS,
    ACTOR_MOVIES_FAILED,
    POP_SUCCESS,
    POP_FAILED,
    NOW_SUCCESS,
    NOW_FAILED,
    TOP_SUCCESS,
    TOP_FAILED,
    SUGGESTION_SUCCESS,
    SUGGESTION_FAILED,
    SUGGESTION_SUCCESS_1,
    SUGGESTION_FAILED_1,
    SUGGESTION_CLEAR,
    CREATE_SESSION_ID_SUCCESS,
    CREATE_SESSION_ID_FAILED,
    CLEAR_SESSION_ID,
    ACCOUNT_STATES_SUCCESS,
    ACCOUNT_STATES_FAILED,
    MARK_FAV_SUCCESS,
    MARK_FAV_FAILED,
    FAV_MOVIES_SUCCESS,
    FAV_MOVIES_FAILED,
    WATCHLIST_FAILED,
    WATCHLIST_SUCCESS,
    CREATED_LIST_FAILED,
    CREATED_LIST_SUCCESS,
    GET_MY_LIST_SUCCESS,
    GET_MY_LIST_FAILED,
} from "../constants/action_types";

const initialState = {
    config: {},
    popular: {},
    error: "",
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
    error: "",
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
    error: "",
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
    error: "",
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

const actorDetailsState = {
    actor_details: {},
    actor_movies: {},
    error: "",
};

export const actorDetailsReducer = (state = actorDetailsState, action = {}) => {
    switch (action.type) {
        case ACTOR_DETAILS_SUCCESS:
            return { ...state, actor_details: action.payload };
        case ACTOR_DETAILS_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const actorMoviesReducer = (state = actorDetailsState, action = {}) => {
    switch (action.type) {
        case ACTOR_MOVIES_SUCCESS:
            return { ...state, actor_movies: action.payload };
        case ACTOR_MOVIES_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//pagination

const paginationPopState = {
    data: {},
    error: "",
};

export const popularPageReducer = (state = paginationPopState, action = {}) => {
    switch (action.type) {
        case POP_SUCCESS:
            return { ...state, data: action.payload };
        case POP_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const paginationNowState = {
    data: {},
    error: "",
};

export const nowPlayingPageReducer = (
    state = paginationNowState,
    action = {}
) => {
    switch (action.type) {
        case NOW_SUCCESS:
            return { ...state, data: action.payload };
        case NOW_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const paginationTopState = {
    data: {},
    error: "",
};

export const topPageReducer = (state = paginationTopState, action = {}) => {
    switch (action.type) {
        case TOP_SUCCESS:
            return { ...state, data: action.payload };
        case TOP_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const moviesState = {
    movies: {},
    error: "",
};

export const suggestionReducer = (state = moviesState, action = {}) => {
    switch (action.type) {
        case SUGGESTION_SUCCESS:
            return { ...state, movies: action.payload };
        case SUGGESTION_FAILED:
            return { ...state, error: action.payload };
        case SUGGESTION_CLEAR:
            return { ...state, movies: {} };
        default:
            return state;
    }
};

const moviesState1 = {
    movies: {},
    error: "",
};

export const suggestionReducer1 = (state = moviesState1, action = {}) => {
    switch (action.type) {
        case SUGGESTION_SUCCESS_1:
            return { ...state, movies: action.payload };
        case SUGGESTION_FAILED_1:
            return { ...state, error: action.payload };
        case SUGGESTION_CLEAR:
            return { ...state, movies: {} };
        default:
            return state;
    }
};

///====================

// Check localStorage for saved Session Id, else return empty string
const storedSessionId = localStorage.getItem("sessionId") || "";

export const sessionReducer = (state = storedSessionId, action = {}) => {
    switch (action.type) {
        case CREATE_SESSION_ID_SUCCESS:
            localStorage.setItem("sessionId", action.payload.session_id);
            state = action.payload.session_id;
            return state;
        case CREATE_SESSION_ID_FAILED:
            return state;
        case CLEAR_SESSION_ID:
            localStorage.clear();
            state = "";
            return state;
        default:
            return state;
    }
};

////===========================

const accountState = {
    favorites: false,
    viewed: false,
    status_message: "",
    error: "",
};

export const accountStatesReducer = (state = accountState, action = {}) => {
    switch (action.type) {
        case ACCOUNT_STATES_SUCCESS:
            return {
                ...state,
                favorites: action.payload.favorite,
                viewed: action.payload.watchlist,
            };
        case ACCOUNT_STATES_FAILED:
            return { ...state, error: action.payload };
        case MARK_FAV_SUCCESS:
            return { ...state, status_message: action.payload.status_message };
        case MARK_FAV_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const favState = {
    data: {},
    error: "",
};

export const favoritesReducer = (state = favState, action = {}) => {
    switch (action.type) {
        case FAV_MOVIES_SUCCESS:
            return { ...state, data: action.payload };
        case FAV_MOVIES_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const watchlistState = {
    data: {},
    error: "",
};

export const watchlistReducer = (state = watchlistState, action = {}) => {
    switch (action.type) {
        case WATCHLIST_SUCCESS:
            return { ...state, data: action.payload };
        case WATCHLIST_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

/////////////////////

const creLiState = {
    data: {},
    error: "",
};

export const createdListReducer = (state = creLiState, action = {}) => {
    switch (action.type) {
        case CREATED_LIST_SUCCESS:
            return { ...state, data: action.payload };
        case CREATED_LIST_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

////////////////////////

const myListState = {
    data: {},
    error: "",
};

export const myListReducer = (state = myListState, action = {}) => {
    switch (action.type) {
        case GET_MY_LIST_SUCCESS:
            return { ...state, data: action.payload };
        case GET_MY_LIST_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
