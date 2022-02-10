import axios from "axios";
import history from "../history";
import { deleteAllCookies, getTokenFromCookies } from "../Cookies";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */

export const me = () => async dispatch => {
  let token = window.localStorage.getItem(TOKEN);
  if (!token || token == "undefined"){
    token = getTokenFromCookies();
    window.localStorage.setItem(TOKEN, token);
  }
  if (token && token != "undefined") {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate = (email, password, method) => async (dispatch) => {
  try {
    const res = await axios.post(`/auth/${method}`, {email, password});
    console.log(res);
    window.localStorage.setItem(TOKEN, res.data.token)
    window.localStorage.setItem('jtest', "value");
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  deleteAllCookies();
  history.push("/");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
