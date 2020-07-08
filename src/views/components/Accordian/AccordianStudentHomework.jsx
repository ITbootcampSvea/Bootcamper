import React from 'react';
import { Card, Accordion, Row, Col, Form, Button } from 'react-bootstrap';

export default function AccordianStudentHomework({ homework }) {

    let style = {
        width: '100%',
        marginBottom: '1rem'
    }
    const indicator = `indicator_${homework.homeWorkStatus}`
    return (
        <>
            <Accordion style={style}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='flexSpaceBeetween' as={Card.Header} eventKey="0">
                            <label className='testName' style={{ maxWidth: '20rem', width: '20rem' }}>{homework.homeWorkName}</label>
                            <label className='testName'>{homework.dueDate}</label>
                            <span id='statusIndicator' className={indicator}></span>
                            <i className="fa fa-angle-down miniCalendarIcon"></i>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row style={{ marginBottom: '0.5rem' }}>
                                <Col className='accordianCol' xl={9}>
                                    <div>
                                        <label className="accStudentHomeworkCardLbl">Task Description</label>
                                        <p className="accStudentHomeworkCardPara">{homework.homeWorkContent}</p>
                                    </div>
                                </Col >
                                <Col className='accordianCol' xl={3}>
                                    <i class="fa fa-cloud-download downloadIcon" title='Download PDF' style={{ cursor: 'pointer' }}></i>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: '0.5rem' }}>
                            <Col className='accordianCol' >
                                <div style={{width:'100%'}}>
                                <label className="accStudentHomeworkCardLbl">Student Comment</label>
                                <Form style={{ width: '100%' }}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="3" />
                                        <Form.File id="formcheck-api-regular" className="accHomeworkFormFile">
                                            <Form.File.Input />
                                        </Form.File>
                                        <div className='aligmentFlexCenter'>
                                            <Button variant="dark" type='submit' size="sm" style={{ width: '70%', marginTop: '1rem' }}>Submit</Button>
                                        </div>
                                    </Form.Group>
                                </Form>
                                </div>
                                </Col>
                               
                            </Row>
                            <Row>
                                <Col className='accordianCol' >
                                    <div>
                                        <label className="accStudentHomeworkCardLbl">Professor Comment</label>
                                        <p className="accStudentHomeworkCardPara">{homework.proffReplay}</p>
                                    </div>
                                </Col >
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}
