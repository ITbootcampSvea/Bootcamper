import React, { useState } from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

export default function Chat(props) {
  const loggedUser = "Danko";

  const chatMessages = [
    {
      name: "Danko",
      message: "Cao ljudi",
      time: "14:55",
    },
    {
      name: "Marko",
      message: "Hello",
      time: "14:55",
    },
    {
      name: "Milos",
      message: "Aj u Dunju! Dolazim u Bg sutra popodne!",
      time: "14:55",
    },
  ];

  const [chat, setChat] = useState(chatMessages);
  const [singleMessage, setMessage] = useState("");

  const handleChatMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleCreateMessage = (e) => {
    if (singleMessage != "") {
      let newChat = chat;
      newChat.push({ name: loggedUser, message: singleMessage, time: "15:55" });
      setChat(newChat);
      setMessage("");
    } else alert("You didn't type anything!");
  };

  return (
    <div className="container">
      <Card>
        <Card.Header>
          <Card.Title>Messenger</Card.Title>
        </Card.Header>
        <Card.Body>
          {chat.map((message) => (
            <Row>
              <Col xl={4}>
                <p>{message.name}:</p>
              </Col>
              <Col>
                <Card>
                  <p>{message.message}</p>
                </Card>
              </Col>
            </Row>
          ))}
        </Card.Body>
        <Card.Footer>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Type a message..."
              aria-label="Chat message"
              aria-describedby="basic-addon2"
              type="text"
              onChange={(e) => handleChatMessage(e)}
            />
            <InputGroup.Append>
              <Button onClick={(e) => handleCreateMessage(e)} variant="dark">
                Send
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Footer>
      </Card>
    </div>
  );
}
