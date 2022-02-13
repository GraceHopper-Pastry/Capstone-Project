import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMessageEntry from "./NewMessageEntry";

const MessageList = ({ msgByChannel, userId }) => {
  console.log("MS :"+msgByChannel)
  console.log("RI: "+userId)
  return (
    <div>
      <div>
        <div className="messageList">
          {msgByChannel.map((message) => (
            <div className="singleMessage" key={message.id}>
              {message.userId !== userId ? (
              <div className="singleMessageContainer incomingMsg"><div className="messageBubble incoming" >{message.content}</div>
              <div className="messageTime">{new Intl.DateTimeFormat("en", {year: "numeric", month: "long", day: "2-digit", hour:"numeric", minute: "numeric"}).format(Date.parse(message.createdAt))}</div><br/></div>
              ):(
                <div className="singleMessageContainer "><div className="messageBubble message">{message.content}</div>
              <div className="messageTime">{new Intl.DateTimeFormat("en", {year: "numeric", month: "long", day: "2-digit", hour:"numeric", minute: "numeric"}).format(Date.parse(message.createdAt))}</div><br/></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <NewMessageEntry />
    </div>
  );
};

export default MessageList;
