import { combineReducers } from "redux";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
    userReducer: userReducer
})

export default rootReducer;