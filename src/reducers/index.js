import {
    getImgDataReducer,
    getNowPlayingReducer,
    getTopRatedReducer,
    movieDetailReducer,
    castReducer,
    actorDetailsReducer,
    actorMoviesReducer,
    popularPageReducer,
    nowPlayingPageReducer,
    topPageReducer,
    suggestionReducer,
    suggestionReducer1,
    sessionReducer,
    accountStatesReducer,
    favoritesReducer,
    watchlistReducer,
    createdListReducer,
    myListReducer,
} from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getImgDataReducer,
    getNowPlayingReducer,
    getTopRatedReducer,
    movieDetailReducer,
    castReducer,
    actorDetailsReducer,
    actorMoviesReducer,
    popularPageReducer,
    nowPlayingPageReducer,
    topPageReducer,
    suggestionReducer,
    suggestionReducer1,
    sessionReducer,
    accountStatesReducer,
    favoritesReducer,
    watchlistReducer,
    createdListReducer,
    myListReducer,
});

export default rootReducer;
