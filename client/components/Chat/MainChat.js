import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const MainChat = () => {
  const user = useSelector((state) => state.singleUserReducer);

  return user.isMentor ? (
    <div>
      <Sidebar
        id={user.id}
        recipients={user.mentees}
        isMentor={user.isMentor}
      />
    </div>
  ) : (
    <div>
      <Sidebar
        id={user.id}
        recipients={user.mentors}
        isMentor={user.isMentor}
      />
    </div>
  );
};

export default MainChat;
