import { combineReducers } from "redux";
import userInfo from "./info";
import heroes from "./heroes";
import auth from "./auth";

const rootReducer = combineReducers({
  userInfo,
  heroes,
  auth
});

export default rootReducer;