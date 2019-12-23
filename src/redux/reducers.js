import { combineReducers } from "redux";

import sendMessageReducers from "../SendMessage/reducers";

export default combineReducers({
  sendMessage: sendMessageReducers
});
