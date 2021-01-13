import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import detailReducer from "./detailReducer";

const allReducers = combineReducers({
    games: gameReducer,
    detail: detailReducer
})

export default allReducers;