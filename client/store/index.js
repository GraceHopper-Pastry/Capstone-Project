import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import userReducer from "./users";
import singleUserReducer from "./singleUser";
import { RESET_APP } from "./rootReducer";

const reducer = combineReducers({ auth, userReducer, singleUserReducer });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
export const store = createStore(reducer, middleware);

function rootReducer(state, action) {
  if (action.type === RESET_APP) {
    state = undefined;
    //if you want to keep some reducers from being reset, remove state = undefined
    //replace it with cont { <reducerName>} = state; state = { <reducerName>}
  }
  return reducer(state, action);
}

export default rootReducer;
export * from "./auth";
