import React, { useRef } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Col, Table, Form, Button, ProgressBar } from 'react-bootstrap';
import bg from '../img/loginbg.jpg';
import avatar from '../img/profile.jpg';
import AllStudents from '../../base/AllStudents.json'

export default function StudentProfile() {
    const inputFile = useRef(null)
    const now = 75;
    const profileStudent = AllStudents.find(name => name.name === 'Mihajlo' || name.lastName === 'Popovic')
    const handleAvatar = () => {
        inputFile.current.click();
    }
    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid className='containerPadding profileWrapper'>
                <Card className="profileCard">

                    <Card.Img className='profileCardBg' src={bg} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Header>
                            <ProgressBar now={now} label={`${now}%`} srOnl title={`You passed ${now}% of entire course`} />
                        </Card.Header>
                        <Form.File style={{ display: 'none' }} id="formcheck-api-regular" className="accHomeworkFormFile">

                            <Form.File.Input type='file' id='file' ref={inputFile} />
                        </Form.File>
                        <Card.Img onClick={() => handleAvatar()} className='profileCardAvatar' src={avatar} alt="Card Avatar" title='Change Profile Picture' />

                    </Card.ImgOverlay>
                    <Card.Body className='profileCardBody'>
                        <div className='profileCardInfo'>
                            <h1>{profileStudent.name} {profileStudent.lastName}</h1>
                            <h4>{profileStudent.generation}</h4>
                            <h4>{profileStudent.studentID}</h4>
                            <h4>{profileStudent.phone}</h4>
                            <h4> {profileStudent.email}</h4>
                            </div>

                    </Card.Body>)
                        <Card.Footer className='profileCardFooter'>
                        <Col>
                            <ul className="profileFooterList">
                                <li><i class="fa fa-server" title='See Course Plan and Program'></i></li>
                                <li><i class="fa fa-pencil" title='Change Your Password'></i></li>
                                <li><i class="fa fa-graduation-cap" title='See Your Test Results'></i></li>
                            </ul>
                        </Col>
                    </Card.Footer>

                </Card>
            </Container>
        </div>
    )
}
