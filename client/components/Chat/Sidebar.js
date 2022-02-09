import React from "react";

const Sidebar = ({ id, isMentor, recipients }) => {
  console.log(recipients);
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
            <h2>{recipient.firstName + " " + recipient.lastName}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Sidebar;
