import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import messageReducer, { fetchRelationship } from "../../store/allMessages";
//add onclick that changes the prop of the messageList?

const Sidebar = ({ recipients, onChange }) => {
  return (
    <section className="sidebar">
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
