import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";

export const InputForm = () => {
  const initialInputState = { name: "", message: "" };
  const [newMessage, setNewMessage] = useState(initialInputState);

  const { name, message } = newMessage;

  const handleInputChange = e => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = e => {
    Axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: { name, message },
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.data.msg === "suc") {
        console.log("Email has been sent");
        setNewMessage(initialInputState);
      } else {
        console.log("FAILURE");
      }
    });
  };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center mt-4">
          <h2>Send a Message</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                name="name"
                onChange={handleInputChange}
                value={name}
                placeholder="Enter your name here"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                value={message}
                onChange={handleInputChange}
                style={{ height: 150 }}
                name="message"
                placeholder="What's on your mind?"
              ></Input>
            </FormGroup>
            <Button onClick={sendMessage}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
