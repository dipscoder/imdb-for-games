import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const allReducers = combineReducers({
    games: gameReducer,
})

export default allReducers;