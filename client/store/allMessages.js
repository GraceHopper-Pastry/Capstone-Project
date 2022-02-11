import Axios from "axios";
import socket from "../socket";

const TOKEN = "token";

//action types

const GOT_MESSAGES_FROM_SERVER = "GOT_MESSAGES_FROM_SERVER";
const GOT_NEW_MESSAGE_FROM_SERVER = "GOT_NEW_MESSAGE_FROM_SERVER";
const RESET_MESSAGES = "RESET_MESSAGES";

//action creators

export const gotMessagesFromServer = ({ messages, channel }) => {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
    channel,
  };
};

export const _gotNewMessageFromServer = (message) => ({
  type: GOT_NEW_MESSAGE_FROM_SERVER,
  message,
});

export const clearMessages = () => {
  return { type: RESET_MESSAGES };
};

//thunk creator
export const fetchMessages = (recipientId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await Axios.get(`/api/chat/${recipientId}/messages`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(gotMessagesFromServer(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const gotNewMessageFromServer = (body) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        console.log({ body });
        const { data: created } = await Axios.post("/api/chat/messages", body, {
          headers: {
            authorization: token,
          },
        });
        const newMessage = created;
        dispatch(_gotNewMessageFromServer(newMessage));
        socket.emit("new-message", newMessage);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  messages: [],
  currentChannel: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return {
        ...state,
        messages: [...action.messages],
        currentChannel: action.channel,
      };

    case GOT_NEW_MESSAGE_FROM_SERVER:
      return { ...state, messages: [...state.messages, action.message] };
    case RESET_MESSAGES:
      return initialState;
    default:
      return state;
  }
};

export default messageReducer;
