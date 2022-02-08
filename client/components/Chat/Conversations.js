import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useEffect } from "react-redux";

//A conversation is equal to a mentor-> mentee relationship
const Conversations = () => {
  return (
    <ul>
      <li>
        <Link to={RANDOM_CHANNEL} activeClassName="active">
          <span># really_random</span>
          <span className="badge">
            {
              this.props.messages.filter((message) => message.channelId === 1)
                .length
            }
          </span>
        </Link>
      </li>
      <li>
        <Link to={GENERAL_CHANNEL} activeClassName="active">
          <span># generally_speaking</span>
          <span className="badge">
            {
              this.props.messages.filter((message) => message.channelId === 2)
                .length
            }
          </span>
        </Link>
      </li>
      <li>
        <Link to={DOGS_CHANNEL} activeClassName="active">
          <span># dogs_of_fullstack</span>
          <span className="badge">
            {
              this.props.messages.filter((message) => message.channelId === 3)
                .length
            }
          </span>
        </Link>
      </li>
      <li>
        <Link to={LUNCH_CHANNEL} activeClassName="active">
          <span># lunch_planning</span>
          <span className="badge">
            {
              this.props.messages.filter((message) => message.channelId === 4)
                .length
            }
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default ChannelList;
