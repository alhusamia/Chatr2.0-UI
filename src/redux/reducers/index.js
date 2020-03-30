import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import messagesReducer from "./channel"

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  messages:messagesReducer
});

