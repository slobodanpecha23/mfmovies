import { BASE_URL, API_KEY } from "../constants/api_constants";

export const getConfig = () => `${BASE_URL}configuration?api_key=${API_KEY}`;

export const getPopularData = () =>
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const getNowPlayingData = () =>
    `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const getTopRatedData = () =>
    `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const getMovieDetail = id =>
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;

export const getCast = id =>
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

export const getActorDetails = id =>
    `${BASE_URL}person/${id}?api_key=${API_KEY}&language=en-US`;

export const getActorMovies = id =>
    `${BASE_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;

////======= list: popular, now playing, top rated with pagination

export const moviePage = (category, pn) =>
    `${BASE_URL}movie/${category}?api_key=${API_KEY}&language=en-US&page=${pn}`;

////======= get search

export const suggestion = query =>
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

////======= get token

export const token = () =>
    `${BASE_URL}authentication/token/new?api_key=${API_KEY}`;

export const session = () =>
    `${BASE_URL}authentication/session/new?api_key=${API_KEY}`;

////======= mark fav

export const favMovie = sId =>
    `${BASE_URL}account/{account_id}/favorite?api_key=${API_KEY}&session_id=${sId}`;

////======= watchlist movie

export const watchlist = sId =>
    `${BASE_URL}account/{account_id}/watchlist?api_key=${API_KEY}&session_id=${sId}`;

////======= account states

export const accountStates = (sId, movieId) =>
    `${BASE_URL}movie/${movieId}/account_states?api_key=${API_KEY}&session_id=${sId}`;
