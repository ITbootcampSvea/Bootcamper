import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, ListGroup} from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import mAvatar from "../img/male.png";
import fAvatar from "../img/female.png";
import StudentCardHeader from './StudentCardHeader';
import SearchBar from '../components/SearchBar/SerachBar';
import Accordion from '../components/Accordian/Accordian';
import AllStudent from '../../base/AllStudents.json';
import Tests from '../../base/Tests.json';
import HomeWork from '../../base/HomeWork.json';



const Students = () => {
    // const AllStudent = [
    //     { name: "Milos", lastName: 'Ristic', studentID: "BG-1568", email: "Milos@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Pera", lastName: 'Ristic', studentID: "BG-1488", email: "Pera@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Jovana", lastName: 'Maksimovic', studentID: "BG-1775", email: "Jovana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Zorana", lastName: 'Kec', studentID: "BG-1178", email: "Zorana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Milos", lastName: 'Djordjevic', studentID: "BG-1296", email: "Milos11@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Pavle", lastName: 'Njegus', studentID: "BG-1269", email: "Pavle@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Leposava", lastName: 'Prodanovic', studentID: "BG-1439", email: "Leposava@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Marija", lastName: 'Milovanovic', studentID: "BG-1369", email: "Marija@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Mihajlo", lastName: 'Popovic', studentID: "BG-1455", email: "Mihajlo@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Marija", lastName: 'Strugar', studentID: "BG-1411", email: "Marija21@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Bogdan", lastName: 'Knezevic', studentID: "BG-1334", email: "Bogdan@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Jugoslav", lastName: 'Colovic', studentID: "BG-1114", email: "Jugoslav@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Bojana", lastName: 'Rilak', studentID: "BG-1341", email: "Bojana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Ana", lastName: 'Majstorovic', studentID: "BG-1233", email: "Ana23@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Ksenija", lastName: 'Lukic', studentID: "BG-1331", email: "Ksenija@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Dejan", lastName: 'Cvetkovic', studentID: "BG-1345", email: "Dejan@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' },
    //     { name: "Ana", lastName: 'Popadic', studentID: "BG-1223", email: "Ana@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Tamara", lastName: 'Rodic', studentID: "BG-1221", email: "Tamara@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'female' },
    //     { name: "Zvezdan", lastName: 'Gladisev', studentID: "BG-1121", email: "Zvezdan@gmail.com", phone: "065/123-4535", img: { src: `${mAvatar}`, src1: `${fAvatar}` }, generation: '2020-03', gender: 'male' }]
    
    
    const [selectedStudent, setSelectedStudent] = useState('');
    const [students, setStudents] = useState(AllStudent);

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



  
   
  
  
  
  

    const handleCard = (el) =>{setSelectedStudent(el)}
       
    
    


    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='containerPadding'>
                <Row>
                    <Col xl={5} className='studentListContainer'>
                    
                        <ListGroup style={{width :'100%'}} variant={'light2'}  >
                        <SearchBar  students={students} setStudents={setStudents} />
                        <div className='listContainer'>
                            {students.map((el, index) => <ListGroup.Item student={el} key={el.studentID} className='listFiled' onClick={() => handleCard(el)}>
                               
                                        <label className='listItemText'>{index+1}</label>
                                        <ul className='absence'>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                   <h6 className='listItemText'><span>{el.name}</span> <span>{el.lastName}</span></h6>
                                    <div >  <span className='indicator'></span></div>
                            </ListGroup.Item>)}
                            </div>
                        </ListGroup>
                    </Col>


                    <Col xl={7}>
                        <Card style={{ maxHeight: '82.5vh' }}>
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
                                     {HomeWork.map(el=><Accordion info={el} key={el.id}/>)}
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