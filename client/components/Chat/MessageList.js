import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch,  } from "react-redux";
import Message from "./Message";
import NewMessageEntry from "./NewMessageEntry";
import { fetchMessages } from "../../store/chat";

const MessagesList = () => {

  const dispatch = useDispatch();
  const {}
  useEffect(() => {
    dispatch(fetchMessages);
  });

  const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
  const messages = this.props.messages || [];
  const filteredMessages = messages.filter(
    (message) => message.channelId === channelId
  );

  return (
    <div>
      <ul className="media-list">
        {filteredMessages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
      <NewMessageEntry channelId={Number(this.props.match.params.channelId)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialMessages: () => dispatch(fetchMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
