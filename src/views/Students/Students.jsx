import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, ListGroup,Dropdown } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import mAvatar from "../img/male.png";
import fAvatar from "../img/female.png";
import StudentCardHeader from './StudentCardHeader';
import SearchBar from '../components/SearchBar/SerachBar';
import Accordion from '../components/Accordian/Accordian'


const Students = () => {
    const studentBase = [
        { name: "Milos", lastName: 'Ristic', studentID: "BG-1568", email: "Milos@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Pera", lastName: 'Ristic', studentID: "BG-1488", email: "Pera@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Jovana", lastName: 'Maksimovic', studentID: "BG-1775", email: "Jovana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Zorana", lastName: 'Kec', studentID: "BG-1178", email: "Zorana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Milos", lastName: 'Djordjevic', studentID: "BG-1296", email: "Milos11@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Pavle", lastName: 'Njegus', studentID: "BG-1269", email: "Pavle@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Leposava", lastName: 'Prodanovic', studentID: "BG-1439", email: "Leposava@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Marija", lastName: 'Milovanovic', studentID: "BG-1369", email: "Marija@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Mihajlo", lastName: 'Popovic', studentID: "BG-1455", email: "Mihajlo@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Marija", lastName: 'Strugar', studentID: "BG-1411", email: "Marija21@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Bogdan", lastName: 'Knezevic', studentID: "BG-1334", email: "Bogdan@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Jugoslav", lastName: 'Colovic', studentID: "BG-1114", email: "Jugoslav@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Bojana", lastName: 'Rilak', studentID: "BG-1341", email: "Bojana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Ana", lastName: 'Majstorovic', studentID: "BG-1233", email: "Ana23@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Ksenija", lastName: 'Lukic', studentID: "BG-1331", email: "Ksenija@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Dejan", lastName: 'Cvetkovic', studentID: "BG-1345", email: "Dejan@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
        { name: "Ana", lastName: 'Popadic', studentID: "BG-1223", email: "Ana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Tamara", lastName: 'Rodic', studentID: "BG-1221", email: "Tamara@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
        { name: "Zvezdan", lastName: 'Gladisev', studentID: "BG-1121", email: "Zvezdan@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' }]
    const [selectedStudent, setSelectedStudent] = useState('');
    const [students,setStudents]=useState(studentBase);

    
    

    const defaultCircleStyle = {
        textColor: '#2e2a2c',
        trailColor: '#2e2a2c',
        backgroundColor: 'white'


    }
    const applyProgressStyle = (percentage) => {
        console.warn(percentage)

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


    const studentTest = [
        {
            testName: 'Test1',
            percentage: 20,
            id: 1
        },
        {
            testName: 'Test2',
            percentage: 43,
            id: 2
        },
        {
            testName: 'Test3',
            percentage: 62,
            id: 3
        },
        {
            testName: 'Test4',
            percentage: 89,
            id: 4
        },
    ]

<<<<<<< HEAD
    const handleCard = (el) =>{setSelectedStudent(el)}
       
    
    
=======
    const handleCard = (el) => { setSelectedStudent(el) }


>>>>>>> 10a2a52f0914abb46838f13d4d365f5542ff567e


    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='containerPadding'>
                <Row>
                    <Col xl={5} clasname='studentListContainer'>
                       
                        <ListGroup className='listContainer' >
                        <SearchBar students={students} setStudents={setStudents} />
                            {students.map(el => <ListGroup.Item student={el} key={el.studentID} className='listItem' onClick={() => handleCard(el)}>
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
                        <Card style={{ maxHeight: '78vh' }}>
                            <Card.Header style={{ height: '12rem' }}>
                                <Row>
                                    {selectedStudent ? <StudentCardHeader student={selectedStudent} /> : null}
                                </Row>
                            </Card.Header>
                            <Card.Body >
                                <Card.Body className='aligmentFlexCenter '>
                                    <Row >
                                        {studentTest.map(el => <Col xl={3}> <Card key={el.id} className='marginPadding' style={{ width: '90%' }}

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
                                <Card.Body>
                                    <Row>
                                        <Accordion></Accordion>
                                        <Accordion></Accordion>
                                        <Accordion></Accordion>
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