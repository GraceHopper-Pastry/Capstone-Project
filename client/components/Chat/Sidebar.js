import React, { useEffect } from "react";
import Conversation from "./Conversation";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  });

  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <h3 href="#">
          <div>Stack Support Chat</div>
          <i alt="Brand" className="glyphicon glyphicon-comment"></i>
        </h3>
      </div>
      <h5>Conversations</h5>

      <Conversation />
    </section>
  );
};

export default Sidebar;
