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
    suggestionReducer
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
    suggestionReducer
});

export default rootReducer;
