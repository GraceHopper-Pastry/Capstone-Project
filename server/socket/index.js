const Message = require("../db/models/Message");
const Relationship = require("../db");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(socket.id, " has made a persistent connection to the server!");

    socket.on("new-message", (message) => {
      socket.broadcast.emit("new-message", message);
    });

    socket.on("new-channel", (relationship) => {
      socket.broadcast.emit("new-channel", relationship);
    });
  });
};
