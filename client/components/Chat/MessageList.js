import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Message from "./Message";
import NewMessageEntry from "./NewMessageEntry";
import { fetchMessages } from "../../store/chat";

const MessageList = ({ channel }) => {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages(channel));
  });

  //this is where we need the relationsihp id!

  return (
    <div>
      <ul className="media-list">
        {messages.map((message) => (
          <p>message.content</p>
        ))}
      </ul>
      <NewMessageEntry channelId={Number(this.props.match.params.channelId)} />
    </div>
  );
};

export default MessageList;
