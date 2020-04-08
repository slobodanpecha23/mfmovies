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
    SUGGESTION_CLEAR,
    CREATE_SESSION_ID_SUCCESS,
    CREATE_SESSION_ID_FAILED,
    CLEAR_SESSION_ID,
    MARK_FAV_SUCCESS,
    MARK_FAV_FAILED,
    ACCOUNT_STATES_SUCCESS,
    ACCOUNT_STATES_FAILED,
    CHANGE_ACCOUNT_STATE,
    CHANGE_ACCOUNT_STATE_1,
    CHANGE_ACCOUNT_STATE_2,
    CHANGE_ACCOUNT_STATE_3,
    MARK_VIEWED_SUCCESS,
    MARK_VIEWED_FAILED
} from "../constants/action_types";
import {
    getConfig,
    getPopularData,
    getNowPlayingData,
    getTopRatedData,
    getMovieDetail,
    getCast,
    getActorDetails,
    getActorMovies,
    moviePage,
    suggestion,
    session,
    favMovie,
    accountStates,
    watchlist
} from "../utils/ApiUtils";

export const getImgData = () => dispatch => {
    fetch(getConfig())
        .then(response => response.json())
        .then(data => {
            return (
                dispatch({ type: CONFIG_SUCCESS, payload: data }),
                fetch(getPopularData())
            );
        })
        .then(response => response.json())
        .then(data => dispatch({ type: POPULAR_DATA_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: IMG_DATA_FAILED, payload: error }));
};

export const getNowPlaying = () => dispatch => {
    fetch(getNowPlayingData())
        .then(response => response.json())
        .then(data =>
            dispatch({ type: NOW_PLAYING_DATA_SUCCESS, payload: data })
        )
        .catch(error =>
            dispatch({ type: NOW_PLAYING_DATA_FAILED, payload: error })
        );
};

export const getTopRated = () => dispatch => {
    fetch(getTopRatedData())
        .then(response => response.json())
        .then(data => dispatch({ type: TOP_RATED_DATA_SUCCESS, payload: data }))
        .catch(error =>
            dispatch({ type: TOP_RATED_DATA_FAILED, payload: error })
        );
};

export const movieDetail = id => dispatch => {
    fetch(getMovieDetail(id))
        .then(response => response.json())
        .then(data => dispatch({ type: MOVIE_DETAIL_SUCCESS, payload: data }))
        .catch(error =>
            dispatch({ type: MOVIE_DETAIL_FAILED, payload: error })
        );
};

export const movieCrew = id => dispatch => {
    fetch(getCast(id))
        .then(response => response.json())
        .then(data => dispatch({ type: CAST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: CAST_FAILED, payload: error }));
};

export const actorDetails = id => dispatch => {
    fetch(getActorDetails(id))
        .then(response => response.json())
        .then(data => dispatch({ type: ACTOR_DETAILS_SUCCESS, payload: data }))
        .catch(error =>
            dispatch({ type: ACTOR_DETAILS_FAILED, payload: error })
        );
};

export const actorMovies = id => dispatch => {
    fetch(getActorMovies(id))
        .then(response => response.json())
        .then(data => dispatch({ type: ACTOR_MOVIES_SUCCESS, payload: data }))
        .catch(error =>
            dispatch({ type: ACTOR_MOVIES_FAILED, payload: error })
        );
};

///======== pagination

export const getPopularPagination = (category, pn) => dispatch => {
    fetch(moviePage(category, pn))
        .then(response => response.json())
        .then(data => dispatch({ type: POP_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: POP_FAILED, payload: error }));
};

export const getNowPagination = (category, pn) => dispatch => {
    fetch(moviePage(category, pn))
        .then(response => response.json())
        .then(data => dispatch({ type: NOW_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: NOW_FAILED, payload: error }));
};

export const getTopPagination = (category, pn) => dispatch => {
    fetch(moviePage(category, pn))
        .then(response => response.json())
        .then(data => dispatch({ type: TOP_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: TOP_FAILED, payload: error }));
};

//search suggestion

export const getSuggestion = query => dispatch => {
    fetch(suggestion(query))
        .then(response => response.json())
        .then(data => dispatch({ type: SUGGESTION_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: SUGGESTION_FAILED, payload: error }));
};

export const clearSuggestion = () => dispatch => {
    dispatch({ type: SUGGESTION_CLEAR });
};

///=====================

export const clearSessionId = () => dispatch => {
    dispatch({ type: CLEAR_SESSION_ID });
};

export const getSessionId = token => dispatch => {
    fetch(session(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(token)
    })
        .then(response => response.json())
        .then(data =>
            dispatch({ type: CREATE_SESSION_ID_SUCCESS, payload: data })
        )
        .catch(error =>
            dispatch({ type: CREATE_SESSION_ID_FAILED, payload: error })
        );
};

////=================== fav

export const markAsFav = (id, sId) => dispatch => {
    fetch(favMovie(sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            media_type: "movie",
            media_id: id,
            favorite: true
        })
    })
        .then(response => response.json())
        .then(data => dispatch({ type: MARK_FAV_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: MARK_FAV_FAILED, payload: error }));
};

export const markAsViewed = (id, sId) => dispatch => {
    fetch(watchlist(sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            media_type: "movie",
            media_id: id,
            watchlist: true
        })
    })
        .then(response => response.json())
        .then(data => dispatch({ type: MARK_VIEWED_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: MARK_VIEWED_FAILED, payload: error }));
};

export const getAccountState = (sid, movieId) => dispatch => {
    fetch(accountStates(sid, movieId))
        .then(response => response.json())
        .then(data => dispatch({ type: ACCOUNT_STATES_SUCCESS, payload: data }))
        .catch(error =>
            dispatch({ type: ACCOUNT_STATES_FAILED, payload: error })
        );
};

export const changeAccountState = () => dispatch => {
    dispatch({ type: CHANGE_ACCOUNT_STATE });
};

export const changeAccountState1 = () => dispatch => {
    dispatch({ type: CHANGE_ACCOUNT_STATE_1 });
};

export const changeAccountState2 = () => dispatch => {
    dispatch({ type: CHANGE_ACCOUNT_STATE_2 });
};

export const changeAccountState3 = () => dispatch => {
    dispatch({ type: CHANGE_ACCOUNT_STATE_3 });
};
