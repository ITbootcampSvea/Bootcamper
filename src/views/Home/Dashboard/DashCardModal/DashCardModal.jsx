import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DashCardModal(props) {
  const { singlemodal } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {singlemodal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{singlemodal.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
