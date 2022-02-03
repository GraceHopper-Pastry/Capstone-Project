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
    const { data: newUser } = await axios.put("/api/users", user, {
      headers: {
        authorization: token,
      },
    });
    dispatch(_updateUser(newUser));
    history.push("/");
  };
};

//REDUCER
const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    default:
      return state;
  }
}
