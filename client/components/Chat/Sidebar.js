import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelationships } from "../../store/chat";

const Sidebar = ({ id, isMentor }) => {
  const conversations = useSelector(
    (state) => state.messageReducer.relationships
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelationships(id));
  }, []);

  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <h3 href="#">
          <div>Stack Support Chat</div>
          <i alt="Brand" className="glyphicon glyphicon-comment"></i>
        </h3>
      </div>
      <h5>Conversations</h5>
      {conversations.map((conversation) => {
        return (
          <div>
            <h2>{isMentor ? conversation.menteeId : conversation.mentorId}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Sidebar;
