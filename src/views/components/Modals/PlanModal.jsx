import React, { useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import CoursePlan from '../../../base/CoursePlan.json'

export default function PlanModal({ show, setShow }) {
    const handleClose = () => setShow(false);


    return (
        <>
            <Modal centered  dialogClassName="modal-40w" show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Course Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalListBody' ><ListGroup >
                    {CoursePlan.map((el, index) => <ListGroup.Item className='modalListItem' unit={el} ><label>{index + 1}</label><label>{el.teachingUnit}</label></ListGroup.Item>)}
                </ListGroup></Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={() => handleClose()}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
