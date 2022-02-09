import axios from 'axios';
const TOKEN = 'token';

// matches action type
const GET_MATCHES = 'GET_MATCHES';

// matches action creator
export const getMatches = (matches) => ({
  type: GET_MATCHES,
  matches,
});

// fetchMatches Thunk to get matches
export const fetchMatches = (intakeScore) => {
  return async (dispatch) => {
    try {
     // const token = window.localStorage.getItem(TOKEN);
     // if (token) {
        const { data: matches } = await axios.get(
          `/api/users/mentors/${intakeScore}`,
          //{ headers: { authorization: token } }
        );
        dispatch(getMatches(matches));
     // }
    } catch (err) {
      console.log('fetchMatches thunk error!!', err);
    }
  };
};

const initialState = [];

export default function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches;
    default:
      return state;
  }
}
