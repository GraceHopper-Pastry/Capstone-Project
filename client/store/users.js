import axios from "axios";

const TOKEN = "token";

//actions
const UPDATE_USER = "UPDATE_USER";

//action creator

const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

//thunk creator
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
        await dispatch(_updateUser(newUser));
        //where should this page push to?
        history.push("/home");
      }
    } catch (err) {
      console.log("error, user not updated");
    }
  };
};

//REDUCER
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.user;

    default:
      return state;
  }
}
