import { BASE_URL, API_KEY } from "../constants/api_constants";

export const getConfig = () => `${BASE_URL}configuration?api_key=${API_KEY}`;

export const getPopularData = () =>
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const getNowPlayingData = () =>
    `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const getTopRatedData = () =>
    `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const getMovieDetail = () =>
    `${BASE_URL}movie/278?api_key=${API_KEY}&language=en-US`;

export const getCast = () =>
    `${BASE_URL}movie/278/credits?api_key=${API_KEY}&language=en-US`;
