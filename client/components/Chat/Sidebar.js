import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchRelationship } from "../../store/chat";
//add onclick that changes the prop of the messageList?

const Sidebar = ({ id, isMentor, recipients, setChannel }) => {
  const dispatch = useDispatch;
  const clickHandler = (id) => {
    setChannel(dispatch(fetchRelationship(id)));
  };

  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <h3 href="#">
          <div>Stack Support Chat</div>
          <i alt="Brand" className="glyphicon glyphicon-comment"></i>
        </h3>
      </div>
      <h5>Conversations</h5>
      {recipients.map((recipient) => {
        return (
          <div key={recipient.id}>
            <Button onClick={() => clickHandler(recipient.id)}>
              {recipient.firstName + " " + recipient.lastName}
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default Sidebar;
