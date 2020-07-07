import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Homework from '../../base/HomeWork.json';
import Tests from '../../base/Tests.json';

export default function Assignments() {
    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='containerPadding assignmentsBody'>
                <Row style={{ height: "100%" }}>
                    <Col xl={6} className='aligmentFlexCenter '>
                        <Card style={{ width: '95%' }}>
                            <Card.Header>
                                <Card.Title className="assCardHeading text-center">Homework</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className='assTableBody'>
                                <Table striped bordered hover variant="dark text-center">
                                    <thead>
                                        <tr className='assTableHeading'>
                                            <th>Task Name</th>
                                            <th>Due Date</th>
                                            <th>Action</th>
                                            <th>File</th>
                                        </tr>
                                    </thead>
                                    <tbody  >
                                        {Homework.map(el => <tr homework={el} className='assTableText' >
                                            <td>{el.homeWorkName}</td>
                                            <td>{el.dueDate}</td>
                                            <td><Button variant="dark" style={{ width: '100%' }}>Edit</Button></td>
                                            <td className='aligmentFlexCenter'><Form.File id="formcheck-api-regular">
                                                <Form.File.Input />
                                            </Form.File></td>
                                        </tr>)}
                                        <tr>
                                            <td colSpan="4">+</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} className='aligmentFlexCenter'>
                        <Card style={{ width: '95%' }}>
                            <Card.Header>
                                <Card.Title className="assCardHeading text-center">Test</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <div className='assTableBody'>
                                <Table striped bordered hover variant="dark text-center">
                                    <thead>
                                        <tr className='assTableHeading'>
                                            <th>Task Name</th>
                                            <th>Due Date</th>
                                            <th>Action</th>
                                            <th>File</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Tests.map(el=> <tr test={el} className='assTableText'>
                                            <td>{el.testName}</td>
                                            <td>{el.dueDate}</td>
                                            <td><Button variant="dark" style={{ width: '100%' }}>Edit</Button></td>
                                            <td className='aligmentFlexCenter'><Form.File id="formcheck-api-regular">
                                                <Form.File.Input />
                                            </Form.File></td>
                                        </tr>)}   
                                        <tr>
                                            <td colSpan="4">+</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
