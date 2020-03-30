import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import messagesReducer from "./channel"
import channelsReducer from "./channels";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  messages:messagesReducer,
  channels:channelsReducer
});

