import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import messageReducer, { fetchRelationship } from "../../store/allMessages";
//add onclick that changes the prop of the messageList?

const Sidebar = ({ recipients, onChange }) => {
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
            <Button onClick={() => onChange(recipient.id)}>
              {recipient.firstName + " " + recipient.lastName}
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default Sidebar;
