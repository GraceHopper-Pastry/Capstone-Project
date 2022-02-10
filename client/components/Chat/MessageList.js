import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMessageEntry from "./NewMessageEntry";
import { fetchMessages } from "../../store/allMessages";

const MessageList = ({ channel }) => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages(channel));
  }, [channel]);

  //this is where we need the relationsihp id!

  return (
    <div>
      <div>
        {messages
          .sort(function (x, y) {
            return x.createdAt - y.createdAt;
          })
          .map((message) => (
            <p>message.content</p>
          ))}
      </div>
      <NewMessageEntry />
    </div>
  );
};

export default MessageList;
