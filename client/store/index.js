import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import singleUserReducer from "./singleUser";
import matchesReducer from "./matches";
import messageReducer from "./allMessages";
import mentorReducer from "./mentor";

const reducer = combineReducers({
  auth,
  singleUserReducer,
  matchesReducer,
  messageReducer,
  mentorReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
