import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import NavBar from '../components/NavBar/NavBar';




export default function Home() {
    const percentage = 20;

    return (<>
        <NavBar></NavBar>
        <div className='wrapper'>
            <Container fluid className='aligmentFlexCenter' >
                <Row>
                    <Col className="col-xl-3">
                        <Card className='card' style={{ width: '22rem' }}>
                            <Card.Header className='text-center progresCardHeader cardHeaderBackground'>Test1</Card.Header>
                            <Card.Body>
                                <CircularProgressbar styles={buildStyles({
                                    textColor: '#161515',
                                    trailColor:'#161515' ,
                                    backgroundColor: '#fff',
                                    pathColor:'rgb(255,152,3)'
                                })} value={percentage} text={`${percentage}%`} strokeWidth={14} background={true} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-xl-3">
                        <Card className='card' style={{ width: '22rem' }}>
                            <Card.Header className='text-center progresCardHeader cardHeaderBackground'>Test2</Card.Header>
                            <Card.Body>
                                <CircularProgressbar value={percentage * 2} text={`${percentage * 2}%`} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-xl-3">
                        <Card className='card' style={{ width: '22rem' }}>
                            <Card.Header className='text-center progresCardHeader cardHeaderBackground'>Test3</Card.Header>
                            <Card.Body>
                                <CircularProgressbar styles={buildStyles({
                                    textColor: '#161515',
                                    trailColor:'#161515' ,
                                    backgroundColor: '#fff',
                                    pathColor:'#6AB93C'
                                })} value={percentage * 4.5} text={`${percentage * 4.5}%`}  strokeWidth={14} background={true}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className=".col-xl-3">
                        <Card className='card' style={{ width: '22rem' }}>
                            <Card.Header className='text-center progresCardHeader cardHeaderBackground'>Test4</Card.Header>
                            <Card.Body>
                                <CircularProgressbar value={percentage * 3.6} text={`${percentage * 3.6}%`} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}
