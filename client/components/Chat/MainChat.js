import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";
import { fetchRelationships } from "../../store/allMessages";

const MainChat = () => {
  const { user } = useSelector((state) => {
    return {
      user: state.singleUserReducer,
    };
  });

  const [channel, setChannel] = useState(null);

  function handleChange(newVal) {
    console.log(newVal);
    setChannel(Number(newVal));
  }

  //state of main chat determines what channel we are on - when teh channel changes the props passed to messageList and sideBar change - we pass setChannel to sidebar.

  //this is where we fetch channels

  return (
    <div>
      {user.isMentor ? (
        <Sidebar
          id={user.id}
          recipients={user.Mentees}
          isMentor={user.isMentor}
          onChange={handleChange}
        />
      ) : (
        <Sidebar
          id={user.id}
          recipients={user.Mentors}
          isMentor={user.isMentor}
          onChange={handleChange}
        />
      )}
      <MessageList channel={channel} />
    </div>
  );
};

export default MainChat;
