import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMessageEntry from "./NewMessageEntry";

const MessageList = ({ messages }) => {
  // const { messages } = useSelector((state) => state.messageReducer);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMessages(recipient));
  // }, [recipient]);

  return messages ? (
    <div>
      <div>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))}
        </ul>
      </div>
      <NewMessageEntry />
    </div>
  ) : (
    <div>
      <div>{"No messages yet!"}</div>
      <NewMessageEntry />
    </div>
  );
};

export default MessageList;
