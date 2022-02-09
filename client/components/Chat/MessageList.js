import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Message from "./Message";
import NewMessageEntry from "./NewMessageEntry";
import { fetchMessages } from "../../store/chat";

const MessageList = () => {
  const dispatch = useDispatch();

  //this is where we need the relationsihp id!
  useEffect(() => {
    dispatch(fetchMessages(id));
  }, []);

  const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
  const messages = this.props.messages || [];
  const filteredMessages = messages.filter(
    (message) => message.channelId === channelId
  );

  return (
    <div>
      {/* <ul className="media-list">
        {filteredMessages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
      <NewMessageEntry channelId={Number(this.props.match.params.channelId)} /> */}
    </div>
  );
};

export default MessageList;
