import React from 'react';
import { Modal, Button,Form } from 'react-bootstrap';

export default function PasswordModal({passShow, setPassShow}) {
    const handlePasswordClose = () => setPassShow(false);
    return (
        <>
        <Modal centered   show={passShow} onHide={() => handlePasswordClose()}>
            <Modal.Header closeButton className='modalHeader'>
                <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Current Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Current Password" />
    <Form.Text className="text-muted">
      We'll never share your password with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>New Password</Form.Label>
    <Form.Control type="password" placeholder="Enter New Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Verify Password</Form.Label>
    <Form.Control type="password" placeholder="VerifyPassword" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => handlePasswordClose()}>
                    Close
      </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}
