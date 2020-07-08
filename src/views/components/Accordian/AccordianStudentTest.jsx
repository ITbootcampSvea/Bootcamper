import React from 'react';
import { Card, Accordion, Row, Col, Form, Button } from 'react-bootstrap';


export default function AccordianStudentTest({ test }) {
    return (
        <>
            <Accordion style={{ marginBottom: '1rem' }}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} className='testName text-center flexSpaceBeetween' eventKey="0">
                            <label>{test.testName}</label>
                            <i className="fa fa-angle-down miniCalendarIcon"></i>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row >
                                <Col className='accordianCol' xl={9}>
                                    <div>
                                        <label className="accStudentHomeworkCardLbl">Test Description</label>
                                        <p className="accStudentHomeworkCardPara">{test.testDisc}</p>
                                    </div>
                                </Col >
                                <Col className='accordianCol' xl={3}>
                                    <i class="fa fa-cloud-download downloadIcon" title='Download PDF' style={{ cursor: 'pointer' }}></i>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </>
    )
}
