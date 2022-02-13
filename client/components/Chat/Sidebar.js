import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import messageReducer, { fetchRelationship } from "../../store/allMessages";
import { style } from "@mui/system";
//add onclick that changes the prop of the messageList?

const Sidebar = ({ recipients, onChange }) => {
  return (
    <section className="sidebar">
      <div className="conversations">Conversations</div>
      {recipients.map((recipient) => {
        return (
          <Button key={recipient.id} className="recipientBtn" onClick={() => onChange(recipient.id)}>
            <div>
              <img className="recipientPic" src={recipient.profilePic} />
              <span className="recipientName">{recipient.firstName + " " + recipient.lastName}</span>
            </div>
          </Button>
        );
      })}
      <Button className="recipientBtn" onClick={() => onChange(recipient.id)}>
          <div>
            <img className="recipientPic" src="https://wikiedu.org/wp-content/uploads/2018/10/ada_lovelace_2018_Featured_image.jpg" />
            <span className="recipientName">Ada Lovelace</span>
          </div>
      </Button>
    </section>
  );
};

export default Sidebar;
