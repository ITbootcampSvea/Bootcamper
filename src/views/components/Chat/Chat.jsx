import React, { useState } from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

export default function Chat(props) {
  const loggedUser = "Danko Novovic";

  const chatMessages = [
    {
      name: "Danko Novovic",
      message: "Cao ljudi",
      time: "14:55",
    },
    {
      name: "Marko Planic",
      message: "Hello",
      time: "15:06",
    },
    {
      name: "Milos Ristic",
      message: "Aj u Dunju! Dolazim u Bg sutra popodne!",
      time: "17:00",
    },
  ];

  const chatStyle = {
    width: "20rem",
  };

  const styleLoggedIn = {
    background: "darkOrange",
    padding: "0.4rem",
    display: "inline-block",
  };

  const styleOtherUser = {
    padding: "0.4rem",
    display: "inline-block",
  };

  const [chat, setChat] = useState(chatMessages);
  const [singleMessage, setMessage] = useState("");

  const handleChatMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleCreateMessage = (e) => {
    if (singleMessage !== "") {
      let newChat = chat;
      newChat.push({
        name: loggedUser,
        message: singleMessage,
        time: currentTime,
      });
      setChat(newChat);
      setMessage("");
    } else alert("You didn't type anything!");
  };

  const abbrev = (fullName) => {
    return fullName
      .split(" ")
      .map((el) => el[0])
      .join("");
  };

  const time = new Date();
  const currentTime = time.getHours() + ":" + time.getMinutes();

  return (
    <div className="container">
      <Card style={chatStyle}>
        <Card.Header style={{ fontWeight: "900", textAlign: "center" }}>
          Walkie-talkie
        </Card.Header>
        <Card.Body style={{ overflowY: "scroll", height: "20rem" }}>
          {chat.map((message, index) => (
            <Row key={index}>
              <Col xl={3}>
                <OverlayTrigger overlay={<Tooltip>{message.name}</Tooltip>}>
                  <p>
                    <b>
                      {message.name === loggedUser
                        ? ""
                        : abbrev(message.name) + ":"}
                    </b>
                  </p>
                </OverlayTrigger>
              </Col>

              <Col
                style={{
                  textAlign: message.name === loggedUser ? "right" : "left",
                }}
              >
                <OverlayTrigger overlay={<Tooltip>{message.time}</Tooltip>}>
                  <Card
                    style={
                      message.name === loggedUser
                        ? styleLoggedIn
                        : styleOtherUser
                    }
                  >
                    <p>{message.message}</p>
                  </Card>
                </OverlayTrigger>
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
