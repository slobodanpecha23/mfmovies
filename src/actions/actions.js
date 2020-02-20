import {
    IMG_CONFIG_SUCCESS,
    IMG_GET_POPULAR_SUCCESS,
    IMG_DATA_FAILED,
    IMG_GET_NOW_PLAYING_SUCCESS,
    IMG_GET_NOW_PLAYING_FAILED
} from "../constants/action-types";

export const getImgData = () => dispatch => {
    fetch(
        "https://api.themoviedb.org/3/configuration?api_key=16cf5c1a32c09c8537551ce78b2ffc62"
    )
        .then(response => response.json())
        .then(data => {
            return (
                dispatch({ type: IMG_CONFIG_SUCCESS, payload: data }),
                fetch(
                    "https://api.themoviedb.org/3/movie/popular?api_key=16cf5c1a32c09c8537551ce78b2ffc62&language=en-US&page=1"
                )
            );
        })
        .then(response => response.json())
        .then(data =>
            dispatch({ type: IMG_GET_POPULAR_SUCCESS, payload: data })
        )
        .catch(error => dispatch({ type: IMG_DATA_FAILED, payload: error }));
};

export const getImgNowPlaying = () => dispatch => {
    fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=16cf5c1a32c09c8537551ce78b2ffc62&language=en-US&page=1"
    )
        .then(response => response.json())
        .then(data =>
            dispatch({ type: IMG_GET_NOW_PLAYING_SUCCESS, payload: data })
        )
        .catch(error =>
            dispatch({ type: IMG_GET_NOW_PLAYING_FAILED, payload: error })
        );
};
