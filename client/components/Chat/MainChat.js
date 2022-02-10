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

  function handleChange(newVal) {
    setRecipient(newVal);
  }

  //state of main chat determines what channel we are on - when teh channel changes the props passed to messageList and sideBar change - we pass setChannel to sidebar.

  //this is where we fetch channels

  return (
    <div>
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
      <MessageList messages={messages} />
    </div>
  );
};

export default MainChat;
