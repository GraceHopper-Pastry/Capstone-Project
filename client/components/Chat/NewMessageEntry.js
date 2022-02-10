import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gotNewMessageFromServer, writeMessage } from "../../store/allMessages";
//need to get channelId from somewhere . . .

const NewMessageEntry = () => {
  // const [message, setMessage] = useState("");
  // const newMessageEntry = useSelector((state) => {
  //   return {
  //     newMessageEntry: state.newMessageEntry,
  //   };
  // });
  // const name = useSelector((state) => state.author);
  // const dispatch = useDispatch();
  // const location = useLocation();
  // useEffect(() => {
  //   if (message) {
  //     dispatch(writeMessage(message));
  //   }
  // }, [message]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(gotNewMessageFromServer({ message, channelId, name }));
  //   setMessage("");
  // };
  // return (
  //   <form id="new-message-form" onSubmit={handleSubmit}>
  //     <div className="input-group input-group-lg">
  //       <input
  //         className="form-control"
  //         type="text"
  //         name="content"
  //         value={message}
  //         onChange={(e) => setMessage(e.target.value)}
  //         placeholder="Say something nice..."
  //       />
  //       <span className="input-group-btn">
  //         <button className="btn btn-default" type="submit">
  //           Chat!
  //         </button>
  //       </span>
  //     </div>
  //   </form>
  // );
  return (
    <div>
      <h2>Here's where you'll write your message!</h2>
    </div>
  );
};

export default NewMessageEntry;
