import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";
import { fetchMessages } from "../../store/allMessages";

const MainChat = () => {
  const dispatch = useDispatch();

  const { user, messages } = useSelector((state) => {
    return {
      user: state.singleUserReducer,
      messages: state.messageReducer.messages,
    };
  });

  const mainRelationship = user.Mentors[0]?.id || user.Mentees[0]?.id;

  const [recipient, setRecipient] = useState(mainRelationship);

  useEffect(() => {
    dispatch(fetchMessages(recipient));
  }, [recipient]);

  // useEffect(() => {
  //   dispatch(fetchCurrentRelationship(recipient))
  // }, )

  function handleChange(newVal) {
    setRecipient(newVal);
  }

  return (
    <div className="main-chat">
      <h6>Stack Support Chat</h6>

      <div className="chat">
        <div className="sidebarContainer">
          {user.isMentor ? (
            <Sidebar
              id={user.id}
              recipients={user.Mentees}
              isMentor={user.isMentor}
              onChange={handleChange}
            />
          ) : (
            <Sidebar
              id={user.id}
              recipients={user.Mentors}
              isMentor={user.isMentor}
              onChange={handleChange}
            />
          )}
        </div>
        <div>
          <MessageList msgByChannel={messages} userId={user.id} />
        </div>
      </div>
    </div>
  );
};

export default MainChat;
