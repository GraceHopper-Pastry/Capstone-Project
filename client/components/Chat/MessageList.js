import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMessageEntry from "./NewMessageEntry";

const MessageList = ({ msgByChannel }) => {
  // const { messages } = useSelector((state) => state.messageReducer);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMessages(recipient));
  // }, [recipient]);

  return (
    <div>
      <div>
        <ul>
          {msgByChannel.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))}
        </ul>
      </div>
      <NewMessageEntry />
    </div>
  );
};

export default MessageList;
