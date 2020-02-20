import {
    getImgDataReducer,
    getNowPlayingReducer,
    getTopRatedReducer
} from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getImgDataReducer,
    getNowPlayingReducer,
    getTopRatedReducer
});

export default rootReducer;
