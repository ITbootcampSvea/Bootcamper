import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import logo from '../img/logo1.png'


const Login = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <div className='wrapper aligmentFlexCenter'>
            <Card style={{ width: '40rem' }}>
                <Card.Header className='loginHeading aligmentFlexCenter'>
                    Welcome to Bootcamper !
        </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicEmail " >
                            <Form.Label className='inputLabel aligmentFlexCenter'>Username</Form.Label>
                            <Form.Control pattern=".{3,15}" required type="text" placeholder="Username" />
                            <Form.Control.Feedback type="invalid">
                                User name must be 3-15 characters long.
                    </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='inputLabel aligmentFlexCenter'>Password</Form.Label>
                            <Form.Control pattern=".{6,15}" required type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">
                                Password must be 6-15 characters long.
                    </Form.Control.Feedback>
                        </Form.Group>
                        <div className='aligmentFlexCenter'>
                            <Button variant="btn-sm primaryBtnTypography" type="submit">
                                LOGIN
                </Button>
                        </div>
                    </Form>
                </Card.Body>
                <Card.Footer className='progresCardHeader aligmentFlexCenter loginFooter'>
                    <img className='loginLogo' src={logo} alt='logo' />
                </Card.Footer>
            </Card>
        </div>

    )



}


export default Login