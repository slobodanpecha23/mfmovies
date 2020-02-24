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
    ACTOR_MOVIES_FAILED
} from "../constants/action_types";
import {
    getConfig,
    getPopularData,
    getNowPlayingData,
    getTopRatedData,
    getMovieDetail,
    getCast,
    getActorDetails,
    getActorMovies
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
