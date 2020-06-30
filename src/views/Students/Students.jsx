import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';


const Students = () => {
    const studentBase = [{ name: "Milos", lastName: 'Ristic' }, { name: "Pera", lastName: 'Ristic' }, { name: "Jovana", lastName: 'Maksimovic' }, { name: "Zorana", lastName: 'Kec' }, { name: "Milos", lastName: 'Djordjevic' }, { name: "Pavle", lastName: 'Njegus' }, { name: "Leposava", lastName: 'Prodanovic' }, { name: "Marija", lastName: 'Milovanovic' }, { name: "Mihajlo", lastName: 'Popovic' }, { name: "Marija", lastName: 'Strugar' }, { name: "Bogdan", lastName: 'Knezevic' }, { name: "Jugoslav", lastName: 'Colovic' }, { name: "Bojana", lastName: 'Rilak' }, { name: "Ana", lastName: 'Majstorovic' }]


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
                                    <li><i className="fa fa-check-circle "></i></li>
                                    <li><i className="fa fa-check-circle"></i></li>
                                    <li><i className="fa fa-check-circle"></i></li>
                                    <li><i className="fa fa-times-circle"></i></li>
                                </ul>
                            </ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col xl={7}></Col>
                </Row>
            </Container>
        </div>
    )



}


export default Students