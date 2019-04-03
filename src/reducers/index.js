import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import usersReducer from "./users";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer
});

export default rootReducer;
