import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";

const MainChat = () => {
  const user = useSelector((state) => state.singleUserReducer);

  return (
    <div>
      {user.isMentor ? (
        <Sidebar
          id={user.id}
          recipients={user.Mentees}
          isMentor={user.isMentor}
        />
      ) : (
        <Sidebar
          id={user.id}
          recipients={user.Mentors}
          isMentor={user.isMentor}
        />
      )}
      <MessageList />
    </div>
  );
};

export default MainChat;
