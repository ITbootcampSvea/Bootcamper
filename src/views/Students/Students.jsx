import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import StudentCardHeader from './StudentCardHeader';
import SearchBar from '../components/SearchBar/SerachBar';
import AccordianProfHomework from '../components/Accordian/AccordianProfHomework';
import AllStudent from '../../base/AllStudents.json';
import Tests from '../../base/Tests.json';
import HomeWork from '../../base/HomeWork.json';



const Students = () => {

    const [selectedStudent, setSelectedStudent] = useState('');
    const [students, setStudents] = useState(AllStudent);
    const [status, setStatus] = useState(HomeWork)

    const defaultCircleStyle = {
        textColor: '#2e2a2c',
        trailColor: '#2e2a2c',
        backgroundColor: 'white'
    }

    const applyProgressStyle = (percentage) => {
      

        var progressStyle;
        switch (true) {
            case (percentage <= 20): progressStyle = {
                ...defaultCircleStyle,
                pathColor: "#c72828",
                background: true
            }
                break;

            case (percentage > 20 && percentage <= 50): progressStyle = {
                ...defaultCircleStyle,
                pathColor: 'rgb(255,152,3)'
            }
                break;


            case (percentage > 50 && percentage <= 80): progressStyle = {
                ...defaultCircleStyle,
                pathColor: '#307bd1',

            }
                break;

            case (percentage > 80 && percentage <= 100): progressStyle = {
                ...defaultCircleStyle,
                pathColor: '#6AB93C'
            }
                break;

            default:
                progressStyle = {
                    ...defaultCircleStyle,
                    pathColor: '#afb1b3'
                }

        }

        return progressStyle;
    }

    const handleCard = (el) => { setSelectedStudent(el) }

    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='containerPadding'>
                <Row>
                    <Col xl={5} className='studentListContainer'>

                        <ListGroup style={{ width: '100%' }} variant={'light2'}  >
                            <SearchBar students={students} setStudents={setStudents} />
                            <div className='listContainer'>
                                {students.map((el, index) => <ListGroup.Item student={el} key={el.studentID} className='listFiled' onClick={() => handleCard(el)}>

                                    <label className='listItemText'>{index + 1}</label>
                                    <ul className='absence'>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                    <h6 className='listItemText'><span>{el.name}</span> <span>{el.lastName}</span></h6>
                                    <div >  <span className='listIndicator'></span></div>
                                </ListGroup.Item>)}
                            </div>
                        </ListGroup>
                    </Col>
                    <Col xl={7}>
                        <Card style={{ maxHeight: '82.5vh'}} >
                            <Card.Header style={{ height: '12rem' }}>
                                <Row>
                                    {selectedStudent ? <StudentCardHeader student={selectedStudent} /> : null}
                                </Row>
                            </Card.Header>
                            <Card.Body >
                                <Card.Body className='aligmentFlexCenter '>
                                    <Row >
                                        {Tests.map(el => <Col xl={3}> <Card key={el.id} className='marginPadding' style={{ width: '90%' }}

                                        >
                                            <Card.Header className='aligmentFlexCenter testName'>{el.testName}</Card.Header>
                                            <Card.Body >
                                                <CircularProgressbar className='circleSvg' test={el} key={el.id} value={el.percentage} background={true}
                                                    text={`${el.percentage}%`}
                                                    styles={buildStyles(applyProgressStyle(el.percentage))} ></CircularProgressbar>

                                            </Card.Body>
                                        </Card></Col>)}
                                    </Row>
                                </Card.Body>
                                <Card.Body className='homeWorkWrapper'>
                                    <Row>
                                        {status.map(el => <AccordianProfHomework info={el} key={el.id} status={status} setStatus={setStatus} />)}
                                    </Row>
                                </Card.Body>
                            </Card.Body>
                        </Card>


                    </Col>
                </Row>
            </Container>
        </div>
    )



}


export default Students