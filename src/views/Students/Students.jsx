import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import img from "../img/loginbg.jpg";


const Students = () => {
    const studentBase = [{ name: "Milos", lastName: 'Ristic', studentID: "BG-1568", email: "blatruc@gmail.com", phone: "065/123-4535" }, { name: "Pera", lastName: 'Ristic' }, { name: "Jovana", lastName: 'Maksimovic' }, { name: "Zorana", lastName: 'Kec' }, { name: "Milos", lastName: 'Djordjevic' }, { name: "Pavle", lastName: 'Njegus' }, { name: "Leposava", lastName: 'Prodanovic' }, { name: "Marija", lastName: 'Milovanovic' }, { name: "Mihajlo", lastName: 'Popovic' }, { name: "Marija", lastName: 'Strugar' }, { name: "Bogdan", lastName: 'Knezevic' }, { name: "Jugoslav", lastName: 'Colovic' }, { name: "Bojana", lastName: 'Rilak' }, { name: "Ana", lastName: 'Majstorovic' }, { name: "Ksenija", lastName: 'Lukic' }, { name: "Dejan", lastName: 'Cvetkovic' }, { name: "Ana", lastName: 'Popadic' }, { name: "Tamara", lastName: 'Rodic' }, { name: "Zvezdan", lastName: 'Gladisev' }]


    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='containerPadding'>
                <Row>
                    <Col xl={5} className='aligmentFlexCenter'>
                        <ListGroup className='listContainer' >

                            {studentBase.map(el => <ListGroup.Item student={el}>
                                <div className='aligmentFlexCenter'>  <span className='indicator'></span></div>
                                <h4 className={'listItem'}>{el.name} {el.lastName}</h4>
                                <ul className='absence'>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </ListGroup.Item>)}
                        </ListGroup>
                    </Col>


                    <Col xl={7}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col xl={7}>
                                        <label id="studentName" class><span>StudentID</span>{studentBase[0].studentID}</label>
                                        <label id="studentName">{`${studentBase[0].name} ${studentBase[0].lastName}`}</label>
                                        <label id="studentName">{studentBase[0].phone}</label>
                                        <label id="studentName">{studentBase[0].email}</label>
                                    </Col>
                                    <Col xl={5}>
                                        <Card.Img variant="top" src={img} />
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row>

                                </Row>

                                <Row>

                                </Row>
                            </Card.Body>
                        </Card>


                    </Col>
                </Row>
            </Container>
        </div>
    )



}


export default Students