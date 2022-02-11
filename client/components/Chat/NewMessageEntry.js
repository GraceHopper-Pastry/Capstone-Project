import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gotNewMessageFromServer, writeMessage } from "../../store/allMessages";
import { Button, TextField } from "@mui/material";
const NewMessageEntry = () => {
  const [message, setMessage] = useState("");

  const { newMessageEntry, currentChannel } = useSelector((state) => {
    return {
      newMessageEntry: state.messageReducer.newMessageEntry,
      currentChannel: state.messageReducer.currentChannel,
    };
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ currentChannel });
    dispatch(
      gotNewMessageFromServer({
        relationshipId: currentChannel,
        content: message,
      })
    );
    setMessage("");
  };
  return (
    <form id="new-message-form" onSubmit={handleSubmit}>
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          name="content"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something nice..."
        />
        <span className="input-group-btn">
          <Button className="btn btn-default" type="submit">
            Chat!
          </Button>
        </span>
      </div>
    </form>
  );
};

export default NewMessageEntry;
