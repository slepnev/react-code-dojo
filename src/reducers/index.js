import { combineReducers } from "redux";
import userInfo from "./info";
import heroes from "./heroes";

const rootReducer = combineReducers({
  userInfo,
  heroes,
});

export default rootReducer;