import React, { useState } from 'react';
import {Form,Button, Card} from 'react-bootstrap';


const Login = () =>{

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  

return(
    <Card style={{ width: '18rem' }}>
        <Card.Header>
            Please log in
        </Card.Header>
        <Card.Body>      
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>User name</Form.Label>
                    <Form.Control pattern=".{3,15}" required type="text" placeholder="Username" />
                    <Form.Control.Feedback type="invalid">
                    User name must be 3-15 characters long.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control pattern=".{6,15}" required type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">
                    Password must be 6-15 characters long.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
        </Card.Body>  
        </Card>

)
    


}


export default Login