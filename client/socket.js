import io from "socket.io-client";
import store from "./store";
import { _gotNewMessageFromServer } from "./store/allMessages";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("I am now connected to the server!");
  socket.on("new-message", (message) => {
    store.dispatch(_gotNewMessageFromServer(message));
  });
});

export default socket;
