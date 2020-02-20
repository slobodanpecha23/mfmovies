import { getImgDataReducer, getNowPlayingReducer } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getImgDataReducer,
    getNowPlayingReducer
});

export default rootReducer;
