import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { createCard } from "../../../../services/api.services";

export default function CreateDashCardModal(props) {


  const time = new Date();
  const currentTime =
    time.getHours() + ":" + ("0" + time.getMinutes().toString()).slice(-2);

  const [newCardTitle, setNewCardTitle] = React.useState("");
  const [newCardText, setNewCardText] = React.useState("");


  const createNewCardData = () => {
    let allData = props.carddata;
    let temp = {
      links: [
          "tralalalal",
          "blablabla"
      ],
      title: "Nesto bitno",
      generation: "5/2020-js/2-bg",
      author: "Cvijan",
      description: "Pogledajte ove tutorijale do sutra!!!",
  }

    createCard(temp).then(res=>{
       console.log('response from API',res);
    })
    console.log(allData);
    if (newCardText !== "" && newCardTitle !== "") {
      allData.push({
        date: "4 7 2020",
        time: currentTime,
        title: newCardTitle,
        author: "Dusan Bobicic",
        text: newCardText,
        links: [],
      });
      props.setcarddata(allData);
      props.onHide();
      setNewCardTitle("");
      setNewCardText("");
    } else {
      alert("Please enter a title and text for your new card.");
    }
  };

  const handleNewCardTitle = (e) => {
    setNewCardTitle(e.target.value);
  };

  const handleNewCardText = (e) => {
    setNewCardText(e.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <InputGroup className="mb-3">
          <FormControl
            onChange={(e) => handleNewCardTitle(e)}
            aria-label="CardTitle"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Title for your new card..."
          />
        </InputGroup>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            placeholder="Text for your new card..."
            onChange={(e) => handleNewCardText(e)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => createNewCardData()}>
          Create New Card
        </Button>
        <Button variant="dark" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
