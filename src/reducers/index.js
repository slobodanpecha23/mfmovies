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
    sessionReducer,
    accountStatesReducer
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
    sessionReducer,
    accountStatesReducer
});

export default rootReducer;
