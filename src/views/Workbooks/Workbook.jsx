import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, Table, Form, Button } from 'react-bootstrap';
import HomeWork from '../../base/HomeWork.json';
import AccordianStudentHomework from '../components/Accordian/AccordianStudentHomework';
import AccordianStudentTest from '../components/Accordian/AccordianStudentTest';
import Tests from '../../base/Tests.json'

export default function Workbook() {
    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='assignmentsBody '>
                <Row className='aligmentFlexCenter'>
                <Card style={{ width: '90%', height:'70%' }}>
  <Card.Body>
      <Card.Header><Card.Title className='workbookHeading'>Mihajlo Popovic workbook</Card.Title></Card.Header>
      <Card.Body>
          <Row>
          <Col xl={6}>
          <Card.Title className='workbookSubheading'>Homeworks</Card.Title>
   <Card.Body className='studentHomeworkCardBody'>
       {HomeWork.map(el=><AccordianStudentHomework homework={el}/>)}
   </Card.Body>
          </Col>
          <Col xl={6}>
          <Card.Title className='workbookSubheading'>Tests</Card.Title>
          <Card.Body className='studentTestCardBody'>
{Tests.map(el=><AccordianStudentTest test={el}/>)}
          </Card.Body>
          </Col>
          </Row>
      </Card.Body>
  </Card.Body>
</Card>
                </Row>
                </Container>  
        </div>
    )
}
