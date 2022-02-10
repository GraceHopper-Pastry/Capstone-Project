import axios from "axios";
const TOKEN = "token";

// Single users action type
const GET_SINGLE_USER = "GET_SINGLE_USER";
const UPDATE_USER = "UPDATE_USER";
const RESET_USER = "RESET_USER";

// Single users action creator
export const getSingleUser = (user) => ({
  type: GET_SINGLE_USER,
  user,
});
const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

export const onClear = () => {
  return { type: RESET_USER };
};

// fetchSingleUser Thunk to get the logged in user
export const fetchSingleUser = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.get(`/api/users`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(getSingleUser(data));
      }
    } catch (err) {
      console.log("fetchSingleUser thunk error!!", err);
    }
  };
};
//update the user when new info is entered
export const updateUser = (user, history) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: newUser } = await axios.put("/api/users", user, {
          headers: {
            authorization: token,
          },
        });
        dispatch(_updateUser(newUser));
        //where should this page push to?
        history.push("/users");
      }
    } catch (err) {
      console.log("error, user not updated");
    }
  };
};

const initialState = {};

//SingleUser Reducer
export default function singleUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
}
