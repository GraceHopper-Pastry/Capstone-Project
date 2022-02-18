import axios from "axios";

const GET_MENTOR = "GET_MENTOR";

export const getMentor = (mentor) => ({
  type: GET_MENTOR,
  mentor,
});

export const fetchMentor = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/mentor/${id}`);
      dispatch(getMentor(data));
    } catch (err) {
      console.log("fetchMentor thunk error!!", err);
    }
  };
};

const initialState = {};

export default function mentorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENTOR:
      return action.mentor;
    default:
      return state;
  }
}
