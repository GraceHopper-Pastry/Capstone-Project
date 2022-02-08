import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const MainChat = () => {
  const user = useSelector((state) => state.singleUserReducer);
  return (
    <div>
      <Sidebar id={user.id} isMentor={user.isMentor} />
    </div>
  );
};

export default MainChat;
