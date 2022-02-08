import Axios from "axios";
import socket from "../socket";

const TOKEN = "token";

//action types

const GOT_MESSAGES_FROM_SERVER = "GOT_MESSAGES_FROM_SERVER";
const WRITE_MESSAGE = "WRITE_MESSAGE";
const GOT_NEW_MESSAGE_FROM_SERVER = "GOT_NEW_MESSAGE_FROM_SERVER";
const RESET_MESSAGES = "RESET_MESSAGES";
const GOT_RELATIONSHIPS = "GOT_RELATIONSHIPS";

//action creators

export const gotMessagesFromServer = (messages) => {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
  };
};

export const gotRelationships = (relationships) => ({
  type: GOT_RELATIONSHIPS,
  relationships,
});

export const writeMessage = (inputContent) => ({
  type: WRITE_MESSAGE,
  newMessageEntry: inputContent,
});

export const _gotNewMessageFromServer = (message) => ({
  type: GOT_NEW_MESSAGE_FROM_SERVER,
  message,
});

export const clearMessages = () => {
  return { type: RESET_MESSAGES };
};

//thunk creator
export const fetchMessages = (channel) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(`/api/chat/${channel}/messages`);
      dispatch(gotMessagesFromServer(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const gotNewMessageFromServer = ({ user, channelId, content }) => {
  return async (dispatch) => {
    try {
      const { data: created } = await Axios.post("/api/chat/messages", {
        user,
        channelId,
        content,
      });
      const newMessage = created;
      dispatch(_gotNewMessageFromServer(newMessage));
      socket.emit("new-message", newMessage);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchRelationships = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await Axios.get("/api/chat/channels", {
          headers: {
            authorization: token,
          },
        });
        dispatch(gotRelationships(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  messages: [],
  //what is the purpose of this???
  newMessageEntry: "",
  relationships: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return { ...state, messages: action.messages };
    case WRITE_MESSAGE:
      return { ...state, newMessageEntry: action.newMessageEntry };
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return { ...state, messages: [...state.messages, action.message] };
    case GOT_RELATIONSHIPS:
      return { ...state, relationships: action.relationships };
    case RESET_MESSAGES:
      return initialState;
    default:
      return state;
  }
};

export default messageReducer;
