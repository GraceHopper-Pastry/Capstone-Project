import React from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Messages from "./MessagesList";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Conversations />
        <MessageList />
      </div>
    );
  }
}
