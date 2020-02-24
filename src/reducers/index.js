import {
    getImgDataReducer,
    getNowPlayingReducer,
    getTopRatedReducer,
    movieDetailReducer,
    castReducer
} from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getImgDataReducer,
    getNowPlayingReducer,
    getTopRatedReducer,
    movieDetailReducer,
    castReducer
});

export default rootReducer;
