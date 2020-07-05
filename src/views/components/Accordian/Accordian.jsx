import React from 'react';
import { Card, Accordion, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';

export default function Accordian({info}) {
    let date = new Date();
    let dayNumber = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString('en-US', { weekday: 'long' });
    let monthName = date.toLocaleString('en-US', { month: 'long' });
    let year = date.getFullYear();

    let style = {
        width: '100%',
        marginBottom: '1rem'
    }



    return (

        <>
            <Accordion style={style}  >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='flexSpaceBeetween' as={Card.Header} eventKey="0">
                            <div className="calendar">
                                <label className='calendarLbl'>{monthName}</label>
                                <label className='calendarLbl'>{dayName}</label>
                                <label className='calendarLbl'>{dayNumber}</label>
                                <label className='calendarLbl'>{year}</label>
                            </div>
                            <label className='testName'>{info.homeWorkName}</label>
                            <span className='indicator'></span>
                            <i className="fa fa-angle-down miniCalendarIcon"></i>

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <Card>
                                        <Card.Header className='aligmentFlexCenter testName '>Task Description </Card.Header>
                                        <Card.Body className='aligmentFlexCenter'><p>{info.homeWorkContent}
                                    </p> </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card>
                                        <Card.Header className='aligmentFlexCenter testName '>Student Comment</Card.Header>
                                        <Card.Body className='aligmentFlexCenter'>
                                            <p>{info.studentReplay}</p> </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card>
                                        <Card.Header className='aligmentFlexCenter testName '>Proffesor Comment</Card.Header>
                                        <Card.Body >
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows="3" />
                                                    <div className='aligmentFlexCenter'>
                                                        <Button variant="dark" type='submit' size="sm" style={{ marginTop: '1rem', width: '90%' }}>Submit</Button>
                                                    </div>

                                                </Form.Group>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '2rem' }}>
                                <Form className='homeWorkStatusForm'>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" />
                                    </Form.Group>
                                    <ButtonGroup  size="sm" className="mb-2">
                                        <Button variant='green'>Green</Button>
                                        <Button variant='red'>Red</Button>
                                        <Button variant='blue'>Blue</Button>
                                        <Button variant='yellow'>Yellow</Button>
                                        <Button variant='grey'>Grey</Button>
                                    </ButtonGroup>
                                </Form>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>

    )
}
