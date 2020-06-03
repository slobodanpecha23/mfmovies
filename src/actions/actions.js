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
    MARK_FAV_SUCCESS,
    MARK_FAV_FAILED,
    ACCOUNT_STATES_SUCCESS,
    ACCOUNT_STATES_FAILED,
    MARK_VIEWED_SUCCESS,
    MARK_VIEWED_FAILED,
    FAV_MOVIES_SUCCESS,
    FAV_MOVIES_FAILED,
    WATCHLIST_SUCCESS,
    WATCHLIST_FAILED,
    CREATED_LIST_SUCCESS,
    CREATED_LIST_FAILED,
    CREATE_LIST_SUCCESS,
    CREATE_LIST_FAILED,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILED,
    GET_MY_LIST_SUCCESS,
    GET_MY_LIST_FAILED,
    DELETE_LIST_SUCCESS,
    DELETE_LIST_FAILED,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILED,
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
    watchlist,
    getFavorites,
    getWatchlist,
    getLists,
    createList,
    addItem,
    getMyList,
    deleteMyItem,
    deleteMyList,
} from "../utils/ApiUtils";

export const getImgData = () => (dispatch) => {
    fetch(getConfig())
        .then((response) => response.json())
        .then((data) => {
            return (
                dispatch({ type: CONFIG_SUCCESS, payload: data }),
                fetch(getPopularData())
            );
        })
        .then((response) => response.json())
        .then((data) => dispatch({ type: POPULAR_DATA_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: IMG_DATA_FAILED, payload: error }));
};

export const getNowPlaying = () => (dispatch) => {
    fetch(getNowPlayingData())
        .then((response) => response.json())
        .then((data) =>
            dispatch({ type: NOW_PLAYING_DATA_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: NOW_PLAYING_DATA_FAILED, payload: error })
        );
};

export const getTopRated = () => (dispatch) => {
    fetch(getTopRatedData())
        .then((response) => response.json())
        .then((data) =>
            dispatch({ type: TOP_RATED_DATA_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: TOP_RATED_DATA_FAILED, payload: error })
        );
};

export const movieDetail = (id) => (dispatch) => {
    fetch(getMovieDetail(id))
        .then((response) => response.json())
        .then((data) => dispatch({ type: MOVIE_DETAIL_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: MOVIE_DETAIL_FAILED, payload: error })
        );
};

export const movieCrew = (id) => (dispatch) => {
    fetch(getCast(id))
        .then((response) => response.json())
        .then((data) => dispatch({ type: CAST_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: CAST_FAILED, payload: error }));
};

export const actorDetails = (id) => (dispatch) => {
    fetch(getActorDetails(id))
        .then((response) => response.json())
        .then((data) =>
            dispatch({ type: ACTOR_DETAILS_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: ACTOR_DETAILS_FAILED, payload: error })
        );
};

export const actorMovies = (id) => (dispatch) => {
    fetch(getActorMovies(id))
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTOR_MOVIES_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: ACTOR_MOVIES_FAILED, payload: error })
        );
};

///======== pagination

export const getPopularPagination = (category, pn) => (dispatch) => {
    fetch(moviePage(category, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: POP_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: POP_FAILED, payload: error }));
};

export const getNowPagination = (category, pn) => (dispatch) => {
    fetch(moviePage(category, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: NOW_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: NOW_FAILED, payload: error }));
};

export const getTopPagination = (category, pn) => (dispatch) => {
    fetch(moviePage(category, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: TOP_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: TOP_FAILED, payload: error }));
};

//search suggestion

export const getSuggestion = (query) => (dispatch) => {
    fetch(suggestion(query))
        .then((response) => response.json())
        .then((data) => dispatch({ type: SUGGESTION_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: SUGGESTION_FAILED, payload: error })
        );
};

export const getSuggestion1 = (query) => (dispatch) => {
    fetch(suggestion(query))
        .then((response) => response.json())
        .then((data) => dispatch({ type: SUGGESTION_SUCCESS_1, payload: data }))
        .catch((error) =>
            dispatch({ type: SUGGESTION_FAILED_1, payload: error })
        );
};

export const clearSuggestion = () => (dispatch) => {
    dispatch({ type: SUGGESTION_CLEAR });
};

///=====================

export const clearSessionId = () => (dispatch) => {
    dispatch({ type: CLEAR_SESSION_ID });
};

export const getSessionId = (token) => (dispatch) => {
    fetch(session(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(token),
    })
        .then((response) => response.json())
        .then((data) =>
            dispatch({ type: CREATE_SESSION_ID_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: CREATE_SESSION_ID_FAILED, payload: error })
        );
};

////=================== fav

export const markAsFav = (id, state, sId) => (dispatch) => {
    fetch(favMovie(sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            media_type: "movie",
            media_id: id,
            favorite: state,
        }),
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: MARK_FAV_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: MARK_FAV_FAILED, payload: error }));
};

export const favoritesMovies = (sId, pn) => (dispatch) => {
    fetch(getFavorites(sId, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: FAV_MOVIES_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: FAV_MOVIES_FAILED, payload: error })
        );
};

////================= watchlist

export const markAsViewed = (id, state, sId) => (dispatch) => {
    fetch(watchlist(sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            media_type: "movie",
            media_id: id,
            watchlist: state,
        }),
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: MARK_VIEWED_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: MARK_VIEWED_FAILED, payload: error })
        );
};

export const watchlistMovies = (sId, pn) => (dispatch) => {
    fetch(getWatchlist(sId, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: WATCHLIST_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: WATCHLIST_FAILED, payload: error }));
};

////======= account state
export const getAccountState = (sid, movieId) => (dispatch) => {
    fetch(accountStates(sid, movieId))
        .then((response) => response.json())
        .then((data) =>
            dispatch({ type: ACCOUNT_STATES_SUCCESS, payload: data })
        )
        .catch((error) =>
            dispatch({ type: ACCOUNT_STATES_FAILED, payload: error })
        );
};

////======= created list

export const createdList = (sId, pn) => (dispatch) => {
    fetch(getLists(sId, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: CREATED_LIST_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: CREATED_LIST_FAILED, payload: error })
        );
};

export const createNewList = (sId, name, description) => (dispatch) => {
    fetch(createList(sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            description: description,
            language: "en",
        }),
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: CREATE_LIST_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: CREATE_LIST_FAILED, payload: error })
        );
};

////======= adding item in the created list

export const addMovie = (sId, listId, movieId) => (dispatch) => {
    fetch(addItem(listId, sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            media_id: movieId,
        }),
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: ADD_ITEM_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: ADD_ITEM_FAILED, payload: error }));
};

//// get my list

export const myList = (listId, pn) => (dispatch) => {
    fetch(getMyList(listId, pn))
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_MY_LIST_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: GET_MY_LIST_FAILED, payload: error })
        );
};

//// delete item from list

export const deleteMovie = (sId, listId, movieId) => (dispatch) => {
    fetch(deleteMyItem(listId, sId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            media_id: movieId,
        }),
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: DELETE_ITEM_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: DELETE_ITEM_FAILED, payload: error })
        );
};

//// delete created list

export const deleteList = (sId, listId) => (dispatch) => {
    fetch(deleteMyList(listId, sId), {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => dispatch({ type: DELETE_LIST_SUCCESS, payload: data }))
        .catch((error) =>
            dispatch({ type: DELETE_LIST_FAILED, payload: error })
        );
};
