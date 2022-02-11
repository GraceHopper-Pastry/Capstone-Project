import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMessageEntry from "./NewMessageEntry";

const MessageList = ({ msgByChannel }) => {
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
